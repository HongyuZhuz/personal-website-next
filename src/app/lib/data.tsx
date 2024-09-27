import axios from 'axios';


const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.NEXT_PUBLIC_API_TOKEN as string;

type ImageType = {
  attributes: {
    url: string;
  };
};

export async function fetchPortfolioData() {
  try {
    const response = await axios.get(`${apiUrl}/api/landscape-portfolio?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const images:ImageType[] = response.data.data.attributes.images.data;
    const imageUrls = images.map((image:ImageType) => image.attributes.url as string);
    
    return imageUrls; // 返回解析后的 JSON 数据
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export async function fetchITProjectData() {
  try {
    const response = await axios.get(`${apiUrl}/api/it-projects?populate=*&sort=createdAt:asc`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },}
    );
    return (response.data.data)

  } catch(error) {
    console.error ("Error fetching IT project data", error);
    throw new Error ("Failed to fetch It Project data")

  }
}

export async function fetchResume() {
  try{
    const response = await axios.get(`${apiUrl}/api/upload/files/47`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },})
      const url = response.data.url;
      
      return (url)
  } catch(error){
    console.error("can't get resume"+ error)
  }
}
