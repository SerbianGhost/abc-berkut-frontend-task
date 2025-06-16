import User from "./user";
import Actions from "./actions";
const PhotoPageHeader = ({photo}) => {
  return (
    <header className="photo-page__header">
      <User avatar={photo.user?.profile_image?.medium} name={photo.user?.name} username={photo.user?.username}/>
      <Actions photo={photo}/>
    </header>
  );
};
export default PhotoPageHeader;
