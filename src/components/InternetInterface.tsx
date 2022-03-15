import React from "react";

const InternetInterface = (props) => {
  return (
    <div className="border-2 rounded-sm mb-1">
      <div>{props.key}</div>
      <div>{props.address}</div>
      <div>{props.netmask}</div>
      <div>{props.family}</div>
      <div>{props.mac}</div>
      <div>{props.internal}</div>
      <div>{props.cidr}</div>
    </div>
  );
};

export default InternetInterface;
