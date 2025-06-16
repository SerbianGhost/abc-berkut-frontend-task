import useFavoritesStore from "../../store/favoritesStore";
import Like from "../icons/like";
const LikeButton = ({photo}) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(photo.id);

  const toggleFavorite = () => {
    favorite ? removeFavorite(photo.id) : addFavorite(photo);
  };
  return (
    <button className="like" onClick={toggleFavorite}>
      <Like className={favorite ? "is-liked":""}/>
    </button>
  );
};
export default LikeButton;
