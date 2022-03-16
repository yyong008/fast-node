import React from "react";

const InternetInterface = (props) => {
  return (
    <div className="w-48 p-2 border rounded text-xs m-2 shadow-sm bg-white">
      <div>网络: {props.netKey ?? "未知"}</div>
      <div>地址: {props.address}</div>
      <div>网络掩码: {props.netmask}</div>
      <div>IP类型: {props.family}</div>
      <div>MAC: {props.mac}</div>
      <div>是否内部: {props.internal ? "是" : '否'}</div>
      <div>cidr路由: {props.cidr}</div>
    </div>
  );
};

export default InternetInterface;
