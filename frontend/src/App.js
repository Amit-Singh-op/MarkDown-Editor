import React, { useState, useEffect, useCallback } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { debounce } from "./utils/debounce";
import { convertMarkdownToHtml } from "./services/markdownService";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  const handleMarkdownChange = (value) => {
    setMarkdown(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedConversion = useCallback(
    debounce(async (markdownText) => {
      const htmlContent = await convertMarkdownToHtml(markdownText);
      setHtml(htmlContent);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedConversion(markdown);
  }, [markdown, debouncedConversion]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        gap: 10,
        padding: "2rem",
        overflow: "hidden",
        boxSizing: "border-box",
        backgroundColor: "#28282B",
      }}
    >
      <Editor markdownText={markdown} onMarkdownChange={handleMarkdownChange} />
      <Preview html={html} />
    </div>
  );
};

export default App;
