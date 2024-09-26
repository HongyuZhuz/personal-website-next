import axios from 'axios';


const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.NEXT_PUBLIC_API_TOKEN as string;

export async function fetchPortfolioData() {
  try {
    const response = await axios.get(`${apiUrl}/api/landscape-portfolio?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const images = response.data.data.attributes.images.data;
    const imageUrls = images.map((image:any) => image.attributes.url);
    
    return imageUrls; // 返回解析后的 JSON 数据
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export async function fetchITProjectData() {
  try {
    const response = await axios.get(`${apiUrl}/api/it-projects?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },}
    );
    console.log (response.data.data[0].attributes.showcase.data)

    return (response.data.data)

  } catch(error) {
    console.error ("Error fetching IT project data", error);
    throw new Error ("Failed to fetch It Project data")

  }
}