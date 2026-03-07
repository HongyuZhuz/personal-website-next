import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve(process.cwd(), 'public/generated/data.json');

type GeneratedData = {
  portfolioData?: string[];
  itProjectData?: unknown[];
  careerData?: unknown;
  resume?: string | null;
  topEditPhotos?: Array<{
    documentId?: string | number;
    [key: string]: unknown;
  }>;
};

function readAllData(): GeneratedData {
  try {
    if (!fs.existsSync(dataFilePath)) {
      console.warn('data.json not found');
      return {};
    }

    const raw = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('读取 data.json 失败:', error);
    return {};
  }
}

export async function fetchPortfolioData():Promise<any> {
  const data = readAllData();
  return data.portfolioData ?? [];
}

export async function fetchITProjectData():Promise<any> {
  const data = readAllData();
  return data.itProjectData ?? [];
}

export async function fetchCareerData():Promise<any> {
  const data = readAllData();
  return data.careerData ?? null;
}

export async function fetchResume():Promise<any> {
  const data = readAllData();
  return data.resume ?? null;
}

export async function getTopEditPhotos():Promise<any> {
  const data = readAllData();
  return data.topEditPhotos ?? [];
}

export async function getTopEditPhotoById(id: string | number):Promise<any> {
  const data = readAllData();
  const photos = data.topEditPhotos ?? [];
  return photos.find((photo) => String(photo.documentId) === String(id)) ?? null;
}