import { useEffect, useRef, useState } from "react";
import { ActionButton } from "./components/common/ActionButton";
import { Dropdown } from "./components/common/Dropdown";
import { Dropzone } from "./components/common/Dropzone";
import { FileItem } from "./components/common/FileItem";
import { TabButtons } from "./components/common/TabButtons";
import { Warning } from "./components/common/Warning";
import { Header } from "./components/layout/Header";
import { fileConversions } from "./constants/fileConversions";
import { TABS } from "./constants/tabs";
import { TabsKey } from "./types/tabs";
import { STRINGS, ANIMATION, LAYOUT } from "./constants/app";

function App() {
  const [files, setFiles] = useState<File[]>([]);
  const [targetFormat, setTargetFormat] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState<string>(STRINGS.FORMAT.ALL);
  const [isDragging, setIsDragging] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormatDropdownOpen, setIsFormatDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<(typeof TABS)[TabsKey]>(
    TABS.CONVERT
  );
  const [showWarning, setShowWarning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formatDropdownRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedFormat === STRINGS.FORMAT.ALL) {
      setTargetFormat("");
      setFiles([]);
      return;
    }

    const possibleConversions = getPossibleConversions(selectedFormat);
    if (!possibleConversions.includes(targetFormat)) {
      setTargetFormat("");
    }
    setFiles([]);
  }, [selectedFormat]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        formatDropdownRef.current &&
        !formatDropdownRef.current.contains(event.target as Node)
      ) {
        setIsFormatDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const getAllowedFormats = () => {
    if (selectedFormat === STRINGS.FORMAT.ALL) {
      return fileConversions.map((c) => c.current);
    }
    return [selectedFormat];
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (selectedFormat === STRINGS.FORMAT.ALL) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    const droppedFiles = Array.from(e.dataTransfer.files);
    const allowedFormats = getAllowedFormats();
    const validFiles = droppedFiles.filter((file) => {
      const extension = getFileExtension(file.name);
      return allowedFormats.includes(extension);
    });

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (selectedFormat === STRINGS.FORMAT.ALL) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }

      const selectedFiles = Array.from(e.target.files);
      const allowedFormats = getAllowedFormats();
      const validFiles = selectedFiles.filter((file) => {
        const extension = getFileExtension(file.name);
        return allowedFormats.includes(extension);
      });
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileExtension = (filename: string): string => {
    return filename.split(".").pop()?.toUpperCase() || "";
  };

  const getPossibleConversions = (format: string): string[] => {
    const conversion = fileConversions.find((c) => c.current === format);
    return conversion?.possibleConversions || [];
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleConvert = () => {
    // TODO: Implement file conversion logic
    console.log("Converting files:", files);
    console.log("Target format:", targetFormat);
  };

  const handleCompress = () => {
    // TODO: Implement file compression logic
    console.log("Compressing files:", files);
  };

  const handleTabChange = (tab: (typeof TABS)[TabsKey]) => {
    if (tab === activeTab || isAnimating) return;

    setIsAnimating(true);
    setActiveTab(tab);

    setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION.DURATION);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
        <div className="p-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <TabButtons
                activeTab={activeTab}
                onTabChange={handleTabChange}
                isAnimating={isAnimating}
              />

              <div className="mb-3 relative" ref={formatDropdownRef}>
                <Dropdown
                  isOpen={isFormatDropdownOpen}
                  onToggle={() => setIsFormatDropdownOpen(!isFormatDropdownOpen)}
                  selectedValue={selectedFormat === STRINGS.FORMAT.ALL ? "" : selectedFormat}
                  options={[STRINGS.DROPDOWN.SELECTED_FORMAT, ...fileConversions.map(f => f.current)]}
                  onSelect={(value) => {
                    if (value === STRINGS.DROPDOWN.SELECTED_FORMAT) {
                      setSelectedFormat(STRINGS.FORMAT.ALL);
                      setTargetFormat("");
                    } else {
                      setSelectedFormat(value);
                    }
                    setIsFormatDropdownOpen(false);
                  }}
                  placeholder={STRINGS.DROPDOWN.SELECTED_FORMAT}
                />
              </div>

              <div className="tab-container">
                <div
                  className={`tab-content convert ${
                    activeTab === TABS.CONVERT ? "active" : ""
                  } ${
                    isAnimating
                      ? activeTab === TABS.CONVERT
                        ? "slide-right"
                        : "slide-left"
                      : ""
                  }`}
                >
                  {activeTab === TABS.CONVERT && (
                    <div className="mb-3 relative" ref={dropdownRef}>
                      <Dropdown
                        isOpen={isDropdownOpen}
                        onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                        selectedValue={targetFormat}
                        options={selectedFormat !== STRINGS.FORMAT.ALL ? getPossibleConversions(selectedFormat) : []}
                        onSelect={(value) => {
                          setTargetFormat(value);
                          setIsDropdownOpen(false);
                        }}
                        placeholder={STRINGS.DROPDOWN.TARGET_FORMAT}
                        disabled={selectedFormat === STRINGS.FORMAT.ALL}
                      />
                    </div>
                  )}
                </div>
              </div>

              {showWarning && (
                <Warning message={STRINGS.WARNING.SELECT_FORMAT} />
              )}

              <Dropzone
                isDragging={isDragging}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onFileInput={handleFileInput}
                selectedFormat={selectedFormat}
              />

              {files.length > 0 && (
                <div
                  className={`mt-2 space-y-1 file-list ${
                    activeTab === TABS.CONVERT
                      ? `max-h-[${LAYOUT.MAX_HEIGHT.CONVERT}]`
                      : `max-h-[${LAYOUT.MAX_HEIGHT.COMPRESS}]`
                  } rounded-lg`}
                >
                  {files.map((file, index) => (
                    <FileItem
                      key={index}
                      name={file.name}
                      onRemove={() => removeFile(index)}
                      fileFormat={getFileExtension(file.name)}
                    />
                  ))}
                </div>
              )}

              <ActionButton
                isDisabled={
                  files.length === 0 ||
                  (activeTab === TABS.CONVERT && !targetFormat) ||
                  (activeTab === TABS.COMPRESS && selectedFormat === STRINGS.FORMAT.ALL)
                }
                onClick={activeTab === TABS.CONVERT ? handleConvert : handleCompress}
                text={activeTab === TABS.CONVERT ? STRINGS.BUTTON.CONVERT : STRINGS.BUTTON.COMPRESS}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
