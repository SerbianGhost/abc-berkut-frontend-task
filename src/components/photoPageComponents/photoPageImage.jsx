import Photo from "../common/photo";
import FullScreenIcon from "../icons/fullScreenIcon";
import FullScreenButton from "./fullScreenButton";
const PhotoPageImage = ({ photo }) => {
  return (
    <div className="photo-page__image-wrap">
      <Photo src={photo.urls?.regular} alt={photo.alt_description} />
      <button className="full-screen-button">
        <FullScreenButton photo={photo}/>
      </button>
    </div>
  );
};
export default PhotoPageImage;
