
// import { useState,useEffect } from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
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
//   const [dataset, setData]= useState();

//   useEffect(()=>{
//     const donationItems = JSON.parse(localStorage.getItem("donation"));
//     if(donationItems){
//       setData(donationItems)
//     }
//   },[])

//   const data=[
//     {name: "Group A", value: 12},
//     {name: "Group b", value: dataset}
//   ]

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <PieChart width={400} height={400}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={100}
//           fill="#8884d8"
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   );

// };

// export default Statistics;

import { useState } from "react";
import { VictoryPie } from "victory-pie";
const donationItems = JSON.parse(localStorage.getItem("donation"));
const donate = (donationItems.length);

const myData = [
  { x: "Total Donation", y: 12 },
  { x: "Your Donation", y: donate },
]
const Statistics = () => {


  return (
    <div className='h-64'>
      <VictoryPie
        data={myData}
        colorScale={['red', "green"]}
        radius={100}
      >
      </VictoryPie>

      <div className=" flex gap-10 text-center justify-center items-center mx-auto container">
        <div className="flex gap-2 items-center">
          <h2 className="text-sm">Your Donation:</h2>
          <div className="w-20 h-2 bg-red-700">
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="text-sm">Total Donation:</h2>
          <div className="w-20 h-2 bg-green-700">
          </div>
        </div>
      </div>

    </div>
  );
};

export default Statistics;


