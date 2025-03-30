import { FileConversion } from "../types/file";

export const FILE_CONVERSIONS: Record<string, FileConversion> = {
  // Add your file conversion mappings here
};

export const fileConversions: FileConversion[] = [
  {
    current: "PDF",
    possibleConversions: ["DOCX", "XLSX", "CSV", "JPG", "PNG", "TIFF", "SVG", "TXT", "MD", "HTML", "EPUB", "MOBI", "PPTX"]
  },
  {
    current: "DOCX",
    possibleConversions: ["PDF", "TXT", "MD", "HTML", "EPUB", "MOBI", "TEX", "RTF"]
  },
  {
    current: "CSV",
    possibleConversions: ["XLSX", "JSON", "XML", "SQL", "Parquet", "PDF", "HTML"]
  },
  {
    current: "XLSX",
    possibleConversions: ["CSV", "JSON", "XML", "SQL", "Parquet", "PDF", "HTML"]
  },
  {
    current: "TXT",
    possibleConversions: ["PDF", "DOCX", "MD", "HTML"]
  },
  {
    current: "MD",
    possibleConversions: ["TXT", "PDF", "DOCX", "HTML"]
  },
  {
    current: "HTML",
    possibleConversions: ["PDF", "DOCX", "MD", "TXT"]
  },
  {
    current: "JSON",
    possibleConversions: ["CSV", "XLSX", "XML", "SQL"]
  },
  {
    current: "XML",
    possibleConversions: ["CSV", "XLSX", "JSON", "SQL"]
  },
  {
    current: "SQL",
    possibleConversions: ["CSV", "XLSX", "JSON", "XML"]
  },
  {
    current: "Parquet",
    possibleConversions: ["CSV", "XLSX"]
  },
  {
    current: "JPG",
    possibleConversions: ["PNG", "TIFF", "SVG", "PDF"]
  },
  {
    current: "PNG",
    possibleConversions: ["JPG", "TIFF", "SVG", "PDF"]
  },
  {
    current: "TIFF",
    possibleConversions: ["JPG", "PNG", "SVG", "PDF"]
  },
  {
    current: "SVG",
    possibleConversions: ["JPG", "PNG", "TIFF", "PDF"]
  }
]; 