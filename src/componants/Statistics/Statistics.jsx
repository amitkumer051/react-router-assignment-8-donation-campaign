
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// const Statistics = () => {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }


// export default Statistics;

// import { useState } from "react";
import { VictoryPie } from "victory-pie";


// const donationItems = JSON.parse(localStorage.getItem("donation"));
// console.log(donationItems.length);

const myData = [
  { x: "php", y: 12},
  { x: "python", y:12},
]
const Statistics = () => {


  return (
    <div className='h-60'>
      <VictoryPie
        data={myData}
        colorScale={['red', "green"]}
        radius={100}
      >

      </VictoryPie>
    </div>
  );
};

export default Statistics;