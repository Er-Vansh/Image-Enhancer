import Loading from "./Loading.jsx";

const ImagePreview = (props) => {
  return (
    <>
      <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 max-w-7xl">
        <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold text-center text-white py-4 bg-linear-to-r from-slate-700 to-slate-800">
            Original Image{" "}
          </h2>

          {props.uploaded ? (
            <img
              src={props.uploaded}
              alt="Original"
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-50 text-slate-400">
              No Image Selected
            </div>
          )}
        </div>
        <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold text-center text-white py-4 bg-linear-to-r from-indigo-600 to-blue-500">
            Enhanced Image{" "}
          </h2>

          {props.enhanced && !props.loading && (
            <img src={props.enhanced} alt="Enhanced" className="w-full h-full object-contain bg-gray-50" />
          )}

          {props.loading ? (
            <Loading />
          ) : (
            <div className="flex items-center justify-center h-80 bg-gray-50 text-slate-400">
              No Enhanced Image
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ImagePreview;
