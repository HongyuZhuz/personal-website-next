interface Cover {
    id: number;
    documentId: string;
    name: string;
    url: string;
  }
  
  interface PhotoItem {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    topic: string;
    photo: object[]; // 如果 `photo` 的结构更复杂，可以更具体地定义
    cover: Cover;
  }
  
  type TopEditPhotos = PhotoItem[];