import React from "react";
// import { Button } from "../components/ui/button";
import Button from "../../ui/button/Button";

interface UploadPreviewModalProps {
  file: File | null;
  isOpen: boolean;
  onUpload: () => void;
  onCancel: () => void;
}

const UploadPreviewModal: React.FC<UploadPreviewModalProps> = ({
  file,
  isOpen,
  onUpload,
  onCancel,
}) => {
  if (!isOpen || !file) return null;

  const videoURL = URL.createObjectURL(file);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-[600px] shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Preview Video</h2>
        <video
          src={videoURL}
          controls
          className="w-full h-[300px] rounded-lg mb-4 object-contain bg-black"
        />
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button onClick={onUpload}>Upload</Button>
        </div>
      </div>
    </div>
  );
};

export default UploadPreviewModal;
