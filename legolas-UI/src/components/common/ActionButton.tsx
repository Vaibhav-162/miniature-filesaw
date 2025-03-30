import { ActionButtonProps } from "../../types/components";

const ActionButton = ({ isDisabled, onClick, text }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full mt-4 px-4 py-1.5 rounded-lg transition-colors ${
        isDisabled
          ? "bg-gray-200 dark:bg-gray-400 font-semibold cursor-not-allowed"
          : "dark:bg-gray-300 dark:hover:bg-white dark:text-black bg-gray-900 hover:bg-black text-white font-semibold"
      }`}
    >
      {text}
    </button>
  );
};

export { ActionButton }; 