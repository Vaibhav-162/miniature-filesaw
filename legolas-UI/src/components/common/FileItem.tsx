import { FileItemProps } from "../../types/components";

const FileItem = ({ name, onRemove, fileFormat }: FileItemProps) => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="flex items-center space-x-2">
        <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-600 text-black dark:text-white rounded font-semibold">
          {fileFormat}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300">{name}</span>
      </div>
      <button
        onClick={onRemove}
        className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default FileItem;
