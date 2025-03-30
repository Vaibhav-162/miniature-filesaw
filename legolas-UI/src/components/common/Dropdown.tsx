import { ChevronDown } from "lucide-react";
import { DropdownProps } from "../../types/components";

const Dropdown = ({
  isOpen,
  onToggle,
  selectedValue,
  options,
  onSelect,
  placeholder,
  disabled = false,
}: DropdownProps) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        disabled={disabled}
        className="w-full px-3 py-1.5 text-left bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg flex items-center justify-between text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{selectedValue || placeholder}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-[100] w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg dropdown">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="w-full px-3 py-1.5 text-left text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown }; 