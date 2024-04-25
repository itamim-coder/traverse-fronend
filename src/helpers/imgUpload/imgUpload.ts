import axios from "axios";

export async function uploadImageToCloudinary(data: any) {
  try {
    console.log(data);
    const formData = new FormData();
    formData.append("file", data);
    formData.append("upload_preset", "traverse"); // Replace with your actual ImageBB API key
    formData.append("cloud_name", "da7fd517b"); // Replace with your actual ImageBB API key

    const cloudinaryResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/da7fd517b/upload",
      formData
    );

    console.log(cloudinaryResponse);
    // Get the image URL from the ImageBB response

    return cloudinaryResponse;
  } catch (error) {
    // Handle any errors that occurred during the image upload
    console.error("Error uploading image to Cloudinary:", error);
    throw error; // Re-throw the error for the caller to handle
  }
}
