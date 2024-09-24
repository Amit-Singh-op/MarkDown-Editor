import React from "react";

const Preview = ({ html }) => {
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
        Preview
      </div>
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflow: "auto",
          backgroundColor: "#f5f5f5",
          overflowY: "auto",
          overflowX: "auto",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default Preview;
