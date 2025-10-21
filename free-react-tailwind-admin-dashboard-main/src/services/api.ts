import axios from 'axios';

interface PresignedUrlPart {
  partNumber: number;
  url: string;
}

interface PresignedUrlsResponse {
  uploadId: string;
  parts: PresignedUrlPart[];
}

export const getPresignedUrls = async (file: File): Promise<PresignedUrlsResponse | undefined> => {
  try {
    const response = await axios.post<PresignedUrlsResponse>(
      'http://127.0.0.1:8000/api/get_presigned_urls/',
      {
        filename: file.name,
        filetype: file.type,
        filesize: file.size,
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
  parts: { ETag: string; PartNumber: number }[];
}

export const completeMultipartUpload = async (data: CompleteMultipartUploadRequest) => {
  try {
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