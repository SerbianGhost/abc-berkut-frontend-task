import DownLoadIcon from "../icons/downLoadIcon";
import { handleDownload } from "../../api/unsplash";
const DownLoadButton = ({ photo }) => {

  return (
    <button className="download" onClick={()=>handleDownload(photo)}>
      <DownLoadIcon />
      <span className="desktop-text">Download</span>
    </button>
  );
};

export default DownLoadButton;
