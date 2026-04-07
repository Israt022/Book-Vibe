import  { use, useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
    Z`;
};

const TriangleBar = ({ x, y, width, height, index }) => {
  const color = colors[index % colors.length];
  return <path d={getPath(x, y, width, height)} stroke={color} fill={color} />;
};

const CustomColorLabel = ({ x, y, value, index }) => {
  const fill = colors[index % colors.length];
  return (
    <text x={x} y={y - 6} fill={fill} textAnchor="middle" fontSize={12}>
      {value}
    </text>
  );
};

export default function PageCharts() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json') // JSON file in public folder
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(err => console.log(err));
    }, []);
    const data = books.map(book =>({
        name : book.bookName,
        uv : book.totalPages,
    }))

  return (
    <div className="flex justify-center mt-10">
      <BarChart
        width={700}
        height={400}
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" shape={TriangleBar}>
          <LabelList content={CustomColorLabel} />
        </Bar>
      </BarChart>
    </div>
  );
}