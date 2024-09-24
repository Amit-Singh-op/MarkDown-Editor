import React from "react";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";

const Editor = ({ markdownText, onMarkdownChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        border: "1px solid #ccc",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "#f1f1f1",
          padding: "10px",
          borderBottom: "1px solid #ccc",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Editor
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "#282c34",
          height: "100%",
        }}
      >
        <CodeMirror
          value={markdownText}
          height="100%"
          style={{ height: "100%", overflowY: "auto" }}
          theme={oneDark}
          extensions={[markdown(), EditorView.lineWrapping]}
          onChange={(e) => onMarkdownChange(e)}
        />
      </div>
    </div>
  );
};

export default Editor;
