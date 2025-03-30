import { Upload } from "lucide-react";
import { DropzoneProps } from "../../types/components";

const Dropzone = ({
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileInput,
  selectedFormat,
}: DropzoneProps) => {
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
        isDragging
          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
          : "border-gray-300 dark:border-gray-600"
      }`}
    >
      <input
        type="file"
        multiple
        onChange={onFileInput}
        className="hidden"
        id="file-input"
        accept={
          selectedFormat !== "all"
            ? `.${selectedFormat.toLowerCase()}`
            : undefined
        }
      />
      <label
        htmlFor="file-input"
        className="cursor-pointer flex flex-col items-center"
      >
        <Upload className="h-10 w-10 text-gray-400 dark:text-gray-500 mb-3" />
        <p className="text-gray-600 dark:text-gray-300">
          Drag and drop files here or click to browse
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
          {selectedFormat === "all"
            ? "Please select a file format first"
            : `Only ${selectedFormat} files are allowed`}
        </p>
      </label>
    </div>
  );
};

export { Dropzone }; 