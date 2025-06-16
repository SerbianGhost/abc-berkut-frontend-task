import FullScreenIcon from "../icons/fullScreenIcon";
const FullScreenButton = ({photo}) => {
  return (
    <a className="full-screen-button" href={photo.urls.full} target="_blank">
      <FullScreenIcon />
    </a>
  );
};
export default FullScreenButton;
