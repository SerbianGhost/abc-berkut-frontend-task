import LikeButton from "./likeButton";
import DownLoadButton from "./downloadButton";
const Actions = ({photo}) => {
  return (
    <div className="actions">
      <LikeButton photo={photo}/>
      <DownLoadButton photo={photo}/>
    </div>
  );
};
export default Actions;
