import axios from 'axios';

interface PresignedUrlPart {
  partNumber: number;
  url: string;
}

interface PresignedUrlsResponse {
  uploadId: string;
  parts: PresignedUrlPart[];
  videoId: number | null;
}

export const getPresignedUrls = async (file: File, videoId: number | null): Promise<PresignedUrlsResponse | undefined> => {
  try {
    const response = await axios.post<PresignedUrlsResponse>(
      'http://127.0.0.1:8000/api/get_video_presigned_urls/',
      {
        filename: file.name,
        filetype: file.type,
        filesize: file.size,
        video_Id: videoId
      }
    );

    console.log('Presigned URLs:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Failed to get presigned URLs:', error);
  }
};

interface CompleteMultipartUploadRequest {
  filename: string;
  uploadId: string;
  uploadedVideoId: number | null;
  parts: { ETag: string; PartNumber: number }[];
}

export const completeMultipartUpload = async (data: CompleteMultipartUploadRequest) => {
  try {
    // console.log('data :: ',data)
    const response = await axios.post(
      'http://127.0.0.1:8000/api/complete_multipart_upload/',
      data
    );
    console.log('Multipart upload completed:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to complete multipart upload:', error);
  }
};



// Function to get the presigned URL from the backend
export const getPresignedUrl = async (fileName: string, fileType: string) => {
  try {
    const response = await axios.post("/api/get_presigned_thumbnail_urls/", {
      filename: fileName,
      filetype: fileType,
    });
    return response.data.url;
  } catch (error) {
    console.error("Error fetching presigned URL:", error);
    throw error;
  }
};

// Function to upload file to S3 using presigned URL
export const uploadToS3 = async (url: string, file: File) => {
  try {
    await axios.put(url, file, {
      headers: {
        "Content-Type": file.type,
      },
    });
    console.log("File uploaded successfully!");
  } catch (error) {
    console.error("S3 upload error:", error);
    throw error;
  }
};


// Get presigned URL for thumbnail
export const saveThumbnailImagePath = async (fileName: string, fileType: string, videoId: number | null | undefined) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/api/save_thumbnail_imagePath/?file_name=${encodeURIComponent(fileName)}&file_type=${encodeURIComponent(fileType)}&video_id=${videoId}`
    );
    return res.data; // return just the URL
  } catch (err) {
    console.error("Error fetching presigned thumbnail URL:", err);
    throw err;
  }
};


export const thumbnailuploadToS3 = async (url: string, file: File) => {
  try {
    await axios.put(url, file, {
      headers: {
        "Content-Type": file.type,
        // "x-amz-acl": "public-read", // ✅ matches backend presigned params
      },
    });
    console.log("File uploaded successfully!");
  } catch (err) {
    console.error("S3 upload error:", err);
    throw err;
  }
};


export const saveVideoMetadata = async (payload: object) => {
  try {
    const response = await axios.post("http://localhost:8000/api/video_data_save/", payload);
    console.log("Video data uploaded!");
    return response.data;
  } catch (err) {
    console.error("Error saving video data in the DB:", err);
    throw err;
  }
};
