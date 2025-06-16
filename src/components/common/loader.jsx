const Loader = () => {
  return (
    <div className="circular-loader">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} style={{ "--i": i }}></span>
      ))}
    </div>
  );
};
export default Loader;
