import React from "react";
import { useFolderOne } from "../context/Folder";

export const FolderContent = () => {
  const folder = useFolderOne();
  console.log(folder);
  // make a query fetching files
  // make a query fetching children folder
  // list files
  // list subfolders
  return <div>Folder</div>;
};
