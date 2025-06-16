const PhotoPageMain = ({ children, src }) => {
  return (
    <main className="photo-page__main main" style={{ "--bg": `url(${src})` }}>
      {children}
    </main>
  );
};
export default PhotoPageMain;
