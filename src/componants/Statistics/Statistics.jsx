
// import { useState,useEffect } from 'react';
// import { Line, XAxis, YAxis } from 'recharts';
// import { LineChart } from 'recharts';


// const Statistics = () => {

//     const [data,setData] = useState([])
//     useEffect(() => {
//         const donationItems = JSON.parse(localStorage.getItem('donation'));
//         setData(donationItems);
//     }, [])
//     console.log(data);



//        const students = [
//           {
//             "name": "John Doe",
//             "math_marks": 85
//           },
//           {
//             "name": "Jane Smith",
//             "math_marks": 88
//           },
//           {
//             "name": "Michael Johnson",
//             "math_marks": 0, 
//           },
//           {
//             "name": "Emily Brown",
//             "math_marks": 82
//           }
//         ]
    
      

//     return (
//         <div>
//             <LineChart width={500} height={400} data={data}>
//                 <XAxis></XAxis>
//                 <YAxis></YAxis>
//                 <Line dataKey="data.id"></Line>
//             </LineChart>
//         </div>
//     );
// };

// export default Statistics;


import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  
    Statistics() {
        
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
