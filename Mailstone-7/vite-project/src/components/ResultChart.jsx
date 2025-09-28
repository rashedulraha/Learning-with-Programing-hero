import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { name: "John", age: 15, class: "10", physics: 85, math: 90, chemistry: 88 },
  { name: "Emma", age: 16, class: "10", physics: 78, math: 92, chemistry: 80 },
  { name: "Liam", age: 15, class: "10", physics: 65, math: 70, chemistry: 68 },
  {
    name: "Sophia",
    age: 16,
    class: "10",
    physics: 95,
    math: 98,
    chemistry: 90,
  },
  { name: "Noah", age: 15, class: "10", physics: 72, math: 85, chemistry: 79 },
  {
    name: "Olivia",
    age: 16,
    class: "10",
    physics: 88,
    math: 91,
    chemistry: 85,
  },
  { name: "Ava", age: 15, class: "10", physics: 60, math: 65, chemistry: 62 },
  {
    name: "William",
    age: 16,
    class: "10",
    physics: 92,
    math: 95,
    chemistry: 90,
  },
  { name: "James", age: 15, class: "10", physics: 70, math: 75, chemistry: 72 },
  {
    name: "Isabella",
    age: 16,
    class: "10",
    physics: 82,
    math: 88,
    chemistry: 85,
  },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={1000} height={200} data={resultData}>
        <XAxis dataKey={"name"} stroke="green"></XAxis>
        <Line dataKey="math"></Line>

        <Line dataKey={"chemistry"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
