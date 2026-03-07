import axios from 'axios';
import fs from 'fs';
import path from 'path';

const apiUrl = process.env.STRAPI_API_URL as string;
const token = process.env.STRAPI_API_TOKEN as string;

const dataFilePath = path.resolve(process.cwd(), 'data.json');

type ImageType = {
  url:string
};

async function writeDataToFile(data:unknown, key: string) {
  try {
    const fileData = fs.existsSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath, 'utf-8')) : {};
    fileData[key] = data;
    fs.writeFileSync(dataFilePath, JSON.stringify(fileData, null, 2));
  } catch (error) {
    console.error('写入数据到文件时出错:', error);
  }
}

async function readDataFromFile(key: string) {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
      return fileData[key];
    }
  } catch (error) {
    console.error('从文件读取数据时出错:', error);
  }
  return null;
}

export async function fetchPortfolioData() {

  try {
    const response = await axios.get(`${apiUrl}/api/landscape-porfolio?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const images:ImageType[] = response.data.data.images;
    const imageUrls = images.map((image:ImageType) => image.url as string);
    await writeDataToFile(imageUrls, 'portfolioData');
    return imageUrls; // 返回解析后的 JSON 数据
  } catch (error) {
    console.error("Error fetching data:", error);
    return readDataFromFile('portfolioData');
  }
}

export async function fetchITProjectData() {
  try {
    const response = await axios.get(`${apiUrl}/api/it-projects?populate=*&sort=createdAt:asc`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data.data;
     await writeDataToFile(data, 'itProjectData');

    return data;
  } catch (error) {
    console.error("Error fetching IT project data:", error);
    return readDataFromFile('itProjectData');
  }
}


export async function fetchCareerData() {
  try {
    const response = await axios.get(`${apiUrl}/api/my-career?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    const data = response.data.data.careerInfo;
    await writeDataToFile(data, 'careerData');
    return data;
  } catch (error) {
    console.error("Error fetching career data:", error);
    return readDataFromFile('careerData');
  }
}

export async function fetchResume() {
  try {
    const response = await axios.get(`${apiUrl}/api/resume?ts=${Date.now()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const url = response.data.data.resume_url;
    await writeDataToFile(url, 'resume');
    return url;
  } catch (error) {
    console.error("Error fetching resume:", error);
    return readDataFromFile('resume');
  }
}

export async function getTopEditPhotos() {
  try {
    const response = await axios.get(`${apiUrl}/api/top-edit-photos?populate=*&sort[0]=createdAt:desc`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data.data;
    await writeDataToFile(data, 'topEditPhotos');
    return data;
  } catch (error) {
    console.error("Error fetching top edit photos:", error);
    return readDataFromFile('topEditPhotos');
  }
}


export async function getTopEditPhotoById(id: string | number) {
  try {
    const response = await axios.get(`${apiUrl}/api/top-edit-photos/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching top edit photo by id:", error);
    const photos = await readDataFromFile('topEditPhotos');
    if (photos && Array.isArray(photos)) {
      const photoMap = photos.reduce((map, photo) => {
        map[String(photo.documentId)] = photo;
        return map;
      }, {});
      return photoMap[String(id)] || null;
    }
    return null;
  }
}
