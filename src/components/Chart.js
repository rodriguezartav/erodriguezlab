import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 800, pv: 2100, amt: 2400 },
];

export default function Chart() {
  return (
    <LineChart width={800} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />

      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}
