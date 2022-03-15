import React from "react";

const Cpu = (props) => {
  return (
    <div className="border-2 rounded-sm mb-1">
      <div>cpu: {props.model}</div>
      <div>spee: {props.speed}</div>
      <div>time-idle: {props.times.idle}</div>
      <div>time-user: {props.times.user}</div>
      <div>time-nice: {props.times.nice}</div>
      <div>time-sys: {props.times.sys}</div>
      <div>time-irq: {props.times.irq}</div>
    </div>
  );
};

export default Cpu;
