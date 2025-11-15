// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000';

// // ============================================
// // AUTH SERVICE
// // ============================================

// export const authService = {
//   oauthCallback: async (accessToken: string, refreshToken: string | null) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/auth/callback/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ access_token: accessToken, refresh_token: refreshToken }),
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('OAuth callback error:', error);
//       throw error;
//     }
//   },

//   // authService.getProfile() in api.ts
//   // getProfile: async (token: string) => {
//   //   const token_ = localStorage.getItem('django-token');
//   //   console.log('token_:', token_); // Should print token, not null
//   //   const response = await fetch(`${API_BASE_URL}/api/profile/`, {
//   //     headers: { 'Authorization': `Bearer ${token}` },  // ← IS THIS HEADER BEING SENT?
//   //   });
//   //   return await response.json();
//   // },

//   getProfile: async () => {
//   const token = localStorage.getItem('django-token');
//   const response = await fetch(`${API_BASE_URL}/api/profile/`, {
//     headers: { Authorization: `Token ${token}` },
//   });
//   return response.json();
// },


//   updateProfile: async (token: string, data: any) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/profile/`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('Update profile error:', error);
//       throw error;
//     }
//   },

//   getSessions: async (token: string) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/sessions/`, {
//         headers: { 'Authorization': `Bearer ${token}` },
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('Get sessions error:', error);
//       throw error;
//     }
//   },

//   logout: async (token: string, sessionId: string) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/logout/`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ session_id: sessionId }),
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('Logout error:', error);
//       throw error;
//     }
//   },

//   logoutAll: async (token: string) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/logout-all/`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('Logout all error:', error);
//       throw error;
//     }
//   },
// };

// // ============================================
// // VIDEO - GET PRESIGNED URLS
// // ============================================

// export const getPresignedUrls = async (file: File, videoId: number | null) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/api/get_video_presigned_urls/`,
//       {
//         filename: file.name,
//         filetype: file.type,
//         filesize: file.size,
//         video_Id: videoId,
//       }
//     );
//     console.log('Presigned URLs:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Failed to get presigned URLs:', error);
//     throw error;
//   }
// };

// // ============================================
// // VIDEO - COMPLETE MULTIPART UPLOAD
// // ============================================

// export const completeMultipartUpload = async (data: {
//   filename: string;
//   uploadId: string;
//   uploadedVideoId: number | null;
//   parts: { ETag: string; PartNumber: number }[];
// }) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/api/complete_multipart_upload/`,
//       data
//     );
//     console.log('Multipart upload completed:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Failed to complete multipart upload:', error);
//     throw error;
//   }
// };

// // ============================================
// // VIDEO - GET PRESIGNED THUMBNAIL URL
// // ============================================

// export const saveThumbnailImagePath = async (
//   fileName: string,
//   fileType: string,
//   videoId: number | null | undefined
// ) => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/api/save_thumbnail_imagePath/?file_name=${encodeURIComponent(fileName)}&file_type=${encodeURIComponent(fileType)}&video_id=${videoId}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching presigned thumbnail URL:', error);
//     throw error;
//   }
// };

// // ============================================
// // VIDEO - UPLOAD TO S3 (THUMBNAIL)
// // ============================================

// export const thumbnailuploadToS3 = async (url: string, file: File) => {
//   try {
//     await axios.put(url, file, {
//       headers: {
//         'Content-Type': file.type,
//       },
//     });
//     console.log('Thumbnail uploaded successfully!');
//   } catch (error) {
//     console.error('S3 upload error:', error);
//     throw error;
//   }
// };

// // ============================================
// // VIDEO - UPLOAD TO S3 (VIDEO)
// // ============================================

// export const uploadToS3 = async (url: string, file: File) => {
//   try {
//     await axios.put(url, file, {
//       headers: {
//         'Content-Type': file.type,
//       },
//     });
//     console.log('File uploaded successfully!');
//   } catch (error) {
//     console.error('S3 upload error:', error);
//     throw error;
//   }
// };

// // ============================================
// // VIDEO - SAVE METADATA
// // ============================================

// export const saveVideoMetadata = async (payload: object) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/api/video_data_save/`,
//       payload
//     );
//     console.log('Video data uploaded!');
//     return response.data;
//   } catch (error) {
//     console.error('Error saving video data in the DB:', error);
//     throw error;
//   }
// };

// // ============================================
// // VIDEO - TRIGGER DELETE QUEUE
// // ============================================

// export const triggerDeleteQueue = async () => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/api/trigger-delete-queue/`
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error triggering delete queue:', error);
//     throw error;
//   }
// };

// // ============================================
// // VIDEO - GET USER VIDEOS
// // ============================================

// export const getUserVideos = async (userId: number) => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/api/user-videos/${userId}/`
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user videos:', error);
//     throw error;
//   }
// };





import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000';

// const API_BASE_URL = 'http://34.93.213.137:8000';
const API_BASE_URL = 'https://api.freeshare.world';

// export const CDN_DOMAIN = 'https://cdn.greenheavens.life/';
export const CDN_DOMAIN = 'https://cdn.freeshare.world/';

const getToken = () => localStorage.getItem('django-token');

// ============================================
// AUTH SERVICE
// ============================================

export const authService = {
  oauthCallback: async (accessToken: string, refreshToken: string | null) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/callback/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_token: accessToken, refresh_token: refreshToken }),
    });
    return response.json();
  },

  getProfile: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/api/profile/`, {
      headers: { Authorization: `Token ${token}` },
    });
    return response.json();
  },

  updateProfile: async (data: any) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/api/profile/`, {
      method: 'PUT',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  getSessions: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/api/sessions/`, {
      headers: { Authorization: `Token ${token}` },
    });
    return response.json();
  },

  logout: async (sessionId: string) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/api/logout/`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_id: sessionId }),
    });
    return response.json();
  },

  logoutAll: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/api/logout-all/`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },
};

// ============================================
// VIDEO - GET PRESIGNED URLS
// ============================================

// export const getPresignedUrls = async (file: File, videoId: number | null) => {
//   const response = await axios.post(
//     `${API_BASE_URL}/api/get_video_presigned_urls/`,
//     {
//       filename: file.name,
//       filetype: file.type,
//       filesize: file.size,
//       video_Id: videoId,
//     }
//   );
//   return response.data;
// };


export const getPresignedUrls = async (file: File, videoId: number | null) => {
  const token = localStorage.getItem("django-token");
  const response = await axios.post(
    `${API_BASE_URL}/api/get_video_presigned_urls/`,
    {
      filename: file.name,
      filetype: file.type,
      filesize: file.size,
      video_Id: videoId,
    },
    {
      headers: { Authorization: `Token ${token}` },
    }
  );
  return response.data;
};


// ============================================
// VIDEO - COMPLETE MULTIPART UPLOAD
// ============================================

// export const completeMultipartUpload = async (data: {
//   filename: string;
//   uploadId: string;
//   uploadedVideoId: number | null;
//   parts: { ETag: string; PartNumber: number }[];
// }) => {
//   const response = await axios.post(
//     `${API_BASE_URL}/api/complete_multipart_upload/`,
//     data
//   );
//   return response.data;
// };

export const completeMultipartUpload = async (
  data: {
    filename: string;
    uploadId: string;
    uploadedVideoId: number | null;
    parts: { ETag: string; PartNumber: number }[];
  }
) => {
  const token = localStorage.getItem("django-token");
  const res = await axios.post(
    `${API_BASE_URL}/api/complete_multipart_upload/`,
    data,
    { headers: { Authorization: `Token ${token}` } }
  );
  return res.data;
};


// ============================================
// VIDEO - GET PRESIGNED THUMBNAIL URL
// ============================================

// export const saveThumbnailImagePath = async (
//   fileName: string,
//   fileType: string,
//   videoId: number | null | undefined
// ) => {
//   const response = await axios.get(
//     `${API_BASE_URL}/api/save_thumbnail_imagePath/?file_name=${encodeURIComponent(
//       fileName
//     )}&file_type=${encodeURIComponent(fileType)}&video_id=${videoId}`
//   );
//   return response.data;
// };


export const saveThumbnailImagePath = async (
  fileName: string,
  fileType: string,
  videoId: number | null | undefined
) => {
  const token = localStorage.getItem("django-token");
  const res = await axios.get(
    `${API_BASE_URL}/api/save_thumbnail_imagePath/?file_name=${encodeURIComponent(
      fileName
    )}&file_type=${encodeURIComponent(fileType)}&video_id=${videoId}`,
    { headers: { Authorization: `Token ${token}` } }
  );
  return res.data;
};



// ============================================
// VIDEO - UPLOAD TO S3 (THUMBNAIL)
// ============================================

export const thumbnailuploadToS3 = async (url: string, file: File) => {
  await axios.put(url, file, {
    headers: { 'Content-Type': file.type },
  });
};


// ============================================
// VIDEO - SAVE METADATA
// ============================================

// export const saveVideoMetadata = async (payload: object) => {
//   const response = await axios.post(
//     `${API_BASE_URL}/api/video_data_save/`,
//     payload
//   );
//   return response.data;
// };

export const saveVideoMetadata = async (payload: object) => {
  const token = localStorage.getItem("django-token");
  const res = await axios.post(
    `${API_BASE_URL}/api/video_data_save/`,
    payload,
    { headers: { Authorization: `Token ${token}` } }
  );
  return res.data;
};


// ============================================
// VIDEO - TRIGGER DELETE QUEUE
// ============================================

// export const triggerDeleteQueue = async () => {
//   const response = await axios.post(`${API_BASE_URL}/api/trigger-delete-queue/`);
//   return response.data;
// };

export const triggerDeleteQueue = async () => {
  const token = localStorage.getItem("django-token");
  const res = await axios.post(
    `${API_BASE_URL}/api/trigger-delete-queue/`,
    {},
    { headers: { Authorization: `Token ${token}` } }
  );
  return res.data;
};


// ============================================
// VIDEO - GET USER VIDEOS
// ============================================

// export const getUserVideos = async (userId: number) => {
//   const response = await axios.get(
//     `${API_BASE_URL}/api/user-videos/${userId}/`
//   );
//   return response.data;
// };


export const getUserVideos = async () => {
  const token = localStorage.getItem('django-token');
  const res = await fetch(`${API_BASE_URL}/api/user-videos/`, {
    headers: { Authorization: `Token ${token}` },
  });
  return res.json();
};
