import ImageUpload from "./Components/ImageUpload";
import ImagePreview from "./Components/ImagePreview";
import { enhancedImageURL } from "./utils/apicall";
import { useState } from "react";

const App = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    // Simulate an API call to enhance the image
    try {
      const enhancedURL = await enhancedImageURL(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (err) {
      console.error("Error enhancing image:", err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 flex flex-col items-center">
        <section className="flex flex-col bg-linear-to-r from-indigo-600 to-blue-500 text-white items-center justify-center p-5 w-full h-1/4">
          <span className="h-10 bg-white/20 text-center px-10 py-2 mt-6 mb-4 rounded-xl backdrop-blur-lg font-medium hover:bg-white/30 transition-all">
            ✨ Powered by AI
          </span>
          <h1 className="text-5xl font-bold py-5 tracking-tight">
            AI Image Enhancer
          </h1>
          <p className="text-lg font-medium mb-2 text-blue-100">
            Enhance, Upscale, Denoise, and Restore your images with cutting-edge
            technology
          </p>
        </section>
        <ImageUpload uploadImageHandler={uploadImageHandler} />
        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
        />
        <section className="h-12 bg-linear-to-r from-indigo-600 to-blue-500 w-full text-white flex items-center justify-center">
          <p className="font-medium">&copy; 2025, All rights reserved</p>
        </section>
      </div>
    </>
  );
};

export default App;
