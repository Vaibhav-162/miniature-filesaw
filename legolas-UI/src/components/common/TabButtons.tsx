import { TabValue } from "../../types/tabs";
import { TABS } from "../../constants/app";
import { TabButtonProps, TabButtonsProps } from "../../types/components";

const TabButton = ({ isActive, onClick, text }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-1 px-3 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? "bg-black dark:bg-white text-white dark:text-black shadow-sm"
          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      {text}
    </button>
  );
};

const TabButtons = ({ activeTab, onTabChange, isAnimating }: TabButtonsProps) => {
  const handleTabClick = (tab: TabValue) => {
    if (tab === activeTab || isAnimating) return;
    onTabChange(tab);
  };

  return (
    <div className="flex space-x-1 mb-3 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
      <TabButton
        isActive={activeTab === TABS.CONVERT}
        onClick={() => handleTabClick(TABS.CONVERT)}
        text={TABS.CONVERT}
      />
      <TabButton
        isActive={activeTab === TABS.COMPRESS}
        onClick={() => handleTabClick(TABS.COMPRESS)}
        text={TABS.COMPRESS}
      />
    </div>
  );
};

export { TabButtons };
