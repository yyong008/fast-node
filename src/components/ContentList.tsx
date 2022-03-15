import React from "react";

// components
import Cpu from "./CPU";
import InternetInterface from "./InternetInterface";

import _toString from "../utils";

const ContentList = (props) => {
  let data = props.data;
  console.log("==>", data);

  if (_toString(data) === "[object Object]") {
    data = Array.from(data);
  }
  return (
    <div className={["w-screen", "break-all", "text-white", "p-1"].join(" ")}>
      {data.map((d, i) => {
        return (
          <div key={i} className="bg-indigo-400 py-1 m-1 rounded-sm">
            <div className="flex justify-center align-middle bg-indigo-500 h-10">
              <pre>{d.name}</pre> -{" "}
              {typeof d.content === "string" || typeof d.content === "number"
                ? d.content
                : null}
            </div>
            {_toString(d.content) === "[object Array]" &&
              d.content[0].model &&
              d.content.map((cpu, index) => {
                return <Cpu {...cpu} key={index} />;
              })}
            {_toString(d.content) === "[object Object]" &&
              d.content.lo0 &&
              Object.keys(d.content).map((netKey) => {
                return d.content[netKey].map((net, idx) => {
                  return <InternetInterface {...net} key={idx} />;
                });
              })}
          </div>
        );
      })}
    </div>
  );
};

export default ContentList;
