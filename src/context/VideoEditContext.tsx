// ========== 1. context/VideoEditContext.tsx (NEW) ==========
import React, { createContext, useContext, useState } from "react";

interface Video {
  id: number;
  filename: string;
  title: string;
  thumbnail: string | null;
  description: string;
  created_at: string;
  status: string;
  views?: number;
  likes?: number;
  dislikes?: number;
  comments?: number;
}

interface VideoEditContextType {
  isOpen: boolean;
  videoData: Video | null;
  openModal: (video?: Video) => void;
  closeModal: () => void;
}

const VideoEditContext = createContext<VideoEditContextType | undefined>(undefined);

export const VideoEditProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoData, setVideoData] = useState<Video | null>(null);

  const openModal = (video?: Video) => {
    setVideoData(video || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoData(null);
  };

  return (
    <VideoEditContext.Provider value={{ isOpen, videoData, openModal, closeModal }}>
      {children}
    </VideoEditContext.Provider>
  );
};

export const useVideoEdit = () => {
  const context = useContext(VideoEditContext);
  if (!context) {
    throw new Error("useVideoEdit must be used within VideoEditProvider");
  }
  return context;
};
