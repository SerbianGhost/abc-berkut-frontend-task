const Photo = ({src,alt}) => {
  return (
    <img
      src={src}
      alt={alt}
      className="photos__photo"
    />
  );
};
export default Photo;