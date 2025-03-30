import { TabValue } from "./tabs";

export type TabButtonProps = {
  isActive: boolean;
  onClick: () => void;
  text: string;
};

export type TabButtonsProps = {
  activeTab: TabValue;
  onTabChange: (tab: TabValue) => void;
  isAnimating: boolean;
};

export type DropdownProps = {
  isOpen: boolean;
  onToggle: () => void;
  selectedValue: string;
  options: readonly string[];
  onSelect: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
};

export type WarningProps = {
  message: string;
};

export type DropzoneProps = {
  isDragging: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFormat: string;
};

export type ActionButtonProps = {
  isDisabled: boolean;
  onClick: () => void;
  text: string;
};

export type FileItemProps = {
  name: string;
  onRemove: () => void;
  fileFormat: string;
}; 