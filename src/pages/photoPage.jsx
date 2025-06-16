import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPhotoById, searchSinglePhoto } from "../api/unsplash";
import Header from "../components/common/header";
import PhotoPageMain from "../components/photoPageComponents/photoPageMain";
import PhotoPageImage from "../components/photoPageComponents/photoPageImage";
import PhotoPageHeader from "../components/photoPageComponents/photoPageHeader";
import Loader from "../components/common/loader";

const PhotoPage = () => {
  const { id, query } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
    navigate(`/photo/search/${searchQuery}`);
  };

  useEffect(() => {
    const fetchPhoto = async () => {
      setLoading(true);
      try {
        const data = id
          ? (await getPhotoById(id)).data
          : await searchSinglePhoto(query);
        setPhoto(data);
      } catch (error) {
        console.error("Ошибка при загрузке фото:", error);
        setPhoto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [id, query]);

  return (
    <>
      <Header withSearch onSearch={handleSearch} />

      {loading ? (
        <div className="photo-page container">
          <Loader />
        </div>
      ) : !photo ? (
        <div className="photo-page container">
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            Фото не найдено
          </p>
        </div>
      ) : (
        <PhotoPageMain src={photo.urls?.regular}>
          <section className="photo-page__content container">
            <PhotoPageHeader
              photo={photo}
              avatar={photo.user?.profile_image?.medium}
              name={photo.user?.name}
              username={photo.user?.username}
            />
            <PhotoPageImage
              photo={photo}
            />
          </section>
        </PhotoPageMain>
      )}
    </>
  );
};

export default PhotoPage;
