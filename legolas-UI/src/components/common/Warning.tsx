import { AlertCircle } from "lucide-react";
import { WarningProps } from "../../types/components";

const Warning = ({ message }: WarningProps) => {
  return (
    <div className="mb-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg flex items-center space-x-2">
      <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
      <p className="text-yellow-800 dark:text-yellow-200 text-sm">{message}</p>
    </div>
  );
};

export { Warning }; 