const Loading = () => {
  return (
    <div>
      <p className="pb-3 fw-bold">
        Please wait, we are using free server, sometime it takes few seconds to
        load the server...
      </p>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
