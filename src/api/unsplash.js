import axios from "axios";
const ACCESS_KEY = process.env.REACT_APP_API_UNSPLASH_KEY;

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const getRandomPhotos = (count = 8) => {
  return api.get(`/photos/random`, {
    params: { count },
  });
};

export const searchPhotos = (query, perPage = 8) => {
  return api.get(`/search/photos`, {
    params: {
      query,
      per_page: perPage,
      orientation: "landscape",
    },
  });
};

export const getPhotoById = (id) => {
  return api.get(`/photos/${id}`);
};

export const searchSinglePhoto = (query) => {
  return searchPhotos(query, 1).then((res) => res.data.results[0] || null);
};
export const handleDownload = async (photo) => {
  try {
    await api.get(photo.links.download_location);

    // формируем имя файла
    const cleanDescription = photo.alt_description
      ? photo.alt_description
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace(/[^\w\-]/g, "")
      : "image";
    const fileName = `${cleanDescription || "image"}_${photo.id}.jpg`;

    const response = await fetch(photo.urls.full);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    window.URL.revokeObjectURL(link.href);
    link.remove();
  } catch (error) {
    console.error("Ошибка при скачивании фото:", error);
  }
};
