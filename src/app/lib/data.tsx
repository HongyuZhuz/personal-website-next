import axios from 'axios';
import fs from 'fs';
import path from 'path';


const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.NEXT_PUBLIC_API_TOKEN as string;

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
      },}
    );
    const data = response.data.data;
     await writeDataToFile(data, 'itProjectData');
    return (data)

  } catch(error) {
    console.error ("Error fetching IT project data", error);
    return readDataFromFile('itProjectData');
  }
}


export async function fetchResume() {
  try{
    const response = await axios.get(`${apiUrl}/api/resume`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },})
      const url = response.data.data.resume_url;
      await writeDataToFile(url, 'resume');
      return (url)
  } catch(error){
    console.error("can't get resume"+ error)
    return readDataFromFile('resume');
  }
}

export async function getTopEditPhotos(){
  try {
    const response = await axios.get(`${apiUrl}/api/top-edit-photos?populate=*`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const photos = response.data.data
    await writeDataToFile(photos, 'topEditPhotos');
    return photos;
  } catch (error) {
    console.error('获取顶级编辑照片时出错:', error);
    return readDataFromFile('topEditPhotos');
  }
}

export async function getGraphicDesignPortfolio() {
  try {
    const response = await axios.get(`${apiUrl}/api/graphic-design-portfolio?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    await writeDataToFile(data, 'graphicDesignPortfolio');
    return data;
  } catch (error) {
    console.error('获取平面设计作品集时出错:', error);
    return readDataFromFile('graphicDesignPortfolio');
  }
}


export async function getTopEditPhotoById(id: string | number) {
  try {
    
    // 尝试通过 axios 请求 API 获取指定 id 的数据
    const response = await axios.get(
      `${apiUrl}/api/top-edit-photos/${id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    const photo = response.data.data;
    
    // 如果需要，也可以在这里更新缓存文件，不过这里直接返回获取到的数据
    return photo;
  } catch (error) {
    console.error(`获取 id 为 ${id} 的顶级编辑照片时出错:`, error);
    // 请求失败时，从文件中读取 topEditPhotos 数组
    const photos = await readDataFromFile('topEditPhotos');
    if (photos && Array.isArray(photos)) {
      // 根据 id 查找对应的照片（注意 id 类型可能为字符串或数字）
      const foundPhoto = photos.find(
        (photo: any) => photo.documentId === id || photo.documentId === String(id)
      );
      return foundPhoto || null;
    }
    return null;
  }
}


