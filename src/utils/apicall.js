import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImageURL = async (file) => {
  try {
    const task_id = await uploadImage(file);
    const enhancedImageData = await PollForResult(task_id);
    return enhancedImageData;
  } catch (err) {
    console.error("API call failed:", err);
    throw err;
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);
  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  
  return data.data.task_id;
};

const fetchEnhanceImage = async (task_id) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${task_id}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
if (!data?.data){
    throw new Error("No data found");
}
  return data.data;
};

const PollForResult = async (task_id, retries = 0) => {
  const res = await fetchEnhanceImage(task_id);

  if (res.state === 4) {
    
  

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return PollForResult(task_id, retries + 1);
  }
  console.log(res);
  return res;
};
