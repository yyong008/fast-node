import React from "react";

const SimpleInfo = ({ item }) => {
  return (
    <div className="flex flex-col justify-center align-middle min-h-10">
      <div className="text-lg text-slate-700 mb-2">{item.name}:</div>
      {typeof item.content === "string" || typeof item.content === "number" ? (
        <div className="w-48 p-2 border rounded text-xs m-2 shadow-sm bg-white">{item.content ?? "未知"}</div>
      ) : null}
    </div>
  );
};

export default SimpleInfo;
