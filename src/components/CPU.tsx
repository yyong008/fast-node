import React from "react";

const Cpu = (props) => {
  return (
    <div className="w-48 p-2 border rounded-sm mb-1 text-sm bg-white">
      <div>cpu: {props.model}</div>
      <div>speed: {props.speed}</div>
      <div>time-idle: {props.times.idle}</div>
      <div>time-user: {props.times.user}</div>
      <div>time-nice: {props.times.nice}</div>
      <div>time-sys: {props.times.sys}</div>
      <div>time-irq: {props.times.irq}</div>
    </div>
  );
};

export default Cpu;
