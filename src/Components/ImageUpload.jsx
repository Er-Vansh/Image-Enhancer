const ImageUpload = (props) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      props.uploadImageHandler(file);
    }
  };

  return (
    <>
      <section className="bg-white shadow-md rounded-2xl p-6 w-full max-w-2xl mt-5 transition-all hover:shadow-lg">
        <label
          htmlFor="fileInput"
          className="block w-full cursor-pointer border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-indigo-500 hover:bg-indigo-50/50 transition-all"
        >
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={showImageHandler}
          />
          <span className="text-lg font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Click and drag to upload your image
          </span>
          <p className="text-sm text-slate-400 mt-2">Supported formats: JPG, PNG, WEBP</p>
        </label>
      </section>
    </>
  );
};

export default ImageUpload;
