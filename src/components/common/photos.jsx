import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Photo from "./photo";
import Loader from "./loader";
import { getRandomPhotos, searchPhotos } from "../../api/unsplash";
import useFavoritesStore from "../../store/favoritesStore";

const Photos = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { favorites } = useFavoritesStore();
  const location = useLocation();

  const isFavoritesPage = location.pathname === "/favorites";

  useEffect(() => {
    const fetchImages = async () => {
      if (isFavoritesPage) {
        const filtered = searchTerm
          ? favorites.filter((img) =>
              (img.alt_description || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
          : favorites;

        setImages(filtered);
        return;
      }

      setLoading(true);
      try {
        const response = searchTerm
          ? await searchPhotos(searchTerm)
          : await getRandomPhotos();

        const data = searchTerm ? response.data.results : response.data;
        setImages(data);
      } catch (error) {
        console.error("Ошибка загрузки изображений:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, isFavoritesPage, favorites]);

  return (
    <section className="photos">
      {loading && !isFavoritesPage ? (
        <div className="container">
          <Loader />
        </div>
      ) : (
        <ul className="photos__list container">
          {images.length > 0 ? (
            images.map((img, key) => (
              <li key={key} className="photos__item">
                <Link to={`/photo/${img.id}`}>
                  <Photo
                    src={img.urls?.small || img.src}
                    alt={img.alt_description || "Image"}
                    className="photos__photo"
                    id={img.id}
                    photoData={img}
                  />
                </Link>
              </li>
            ))
          ) : (
            <p className="photos__empty">Нет изображений</p>
          )}
        </ul>
      )}
    </section>
  );
};

export default Photos;
