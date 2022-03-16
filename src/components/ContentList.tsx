import React from "react";

// components
import Cpu from "./CPU";
import InternetInterface from "./InternetInterface";
import SimpleInfo from "./SimpeInfo";

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
          <div key={i} className="py-1 m-1 rounded-sm text-xs text-slate-400">
            <SimpleInfo item={d} />
            {/* cpus */}
            {_toString(d.content) === "[object Array]" && d.content[0].model && (
              <div className="flex flex-1 space-x-4">
                {d.content.map((cpu, index) => {
                  return <Cpu {...cpu} key={index} />;
                })}
              </div>
            )}

            {/* networks */}
            {_toString(d.content) === "[object Object]" && d.content.lo0 && (
              <div className="flex flex-wrap -m-2">
                {Object.keys(d.content).map((netKey) => {
                  return d.content[netKey].map((net, idx) => {
                    return <InternetInterface {...net} key={idx} netKey={netKey} />;
                  });
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContentList;
