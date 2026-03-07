import axios from 'axios';
import fs from 'fs';
import path from 'path';

const apiUrl = process.env.STRAPI_API_URL as string;
const token = process.env.STRAPI_API_TOKEN as string;

const outputDir = path.resolve(process.cwd(), 'public/generated');
const dataFilePath = path.join(outputDir, 'data.json');

type ImageType = {
  url: string;
};

type GeneratedData = {
  portfolioData: string[];
  itProjectData: unknown[];
  careerData: unknown;
  resume: string | null;
  topEditPhotos: unknown[];
};

async function ensureDir() {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function writeDataToFile(data: GeneratedData) {
  await ensureDir();
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

async function fetchPortfolioData() {
  const response = await axios.get(`${apiUrl}/api/landscape-porfolio?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const images: ImageType[] = response.data.data.images;
  return images.map((image) => image.url);
}

async function fetchITProjectData() {
  const response = await axios.get(`${apiUrl}/api/it-projects?populate=*&sort=createdAt:asc`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
}

async function fetchCareerData() {
  const response = await axios.get(`${apiUrl}/api/my-career?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data.careerInfo;
}

async function fetchResume() {
  const response = await axios.get(`${apiUrl}/api/resume?ts=${Date.now()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data.resume_url;
}

async function getTopEditPhotos() {
  const response = await axios.get(
    `${apiUrl}/api/top-edit-photos?populate=*&sort[0]=createdAt:desc`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data;
}

async function buildContent() {
  try {
    const [
      portfolioData,
      itProjectData,
      careerData,
      resume,
      topEditPhotos,
    ] = await Promise.all([
      fetchPortfolioData(),
      fetchITProjectData(),
      fetchCareerData(),
      fetchResume(),
      getTopEditPhotos(),
    ]);

    const data: GeneratedData = {
      portfolioData,
      itProjectData,
      careerData,
      resume,
      topEditPhotos,
    };

    await writeDataToFile(data);
    console.log('✅ data.json generated successfully');
  } catch (error) {
    console.error('❌ Failed to build content:', error);
    process.exit(1);
  }
}

buildContent();