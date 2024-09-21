import { ChartNoAxesCombined, Layers, ShieldCheck } from 'lucide-react';
import React from 'react'

const stats = [
  {
    id: 1,
    title: "Total Users",
    icon: <ChartNoAxesCombined />,
    stats: "10,928",
    percentage: 12,
    desc: "more than percentage users",
  },
  {
    id: 2,
    title: "Stack",
    icon: <Layers />,
    stats: "8,236",
    percentage: 5,
    desc: "more than percentage users",
  },
  {
    id: 3,
    title: "Revenue",
    icon: <ShieldCheck />,
    stats: "6,642",
    percentage: 5,
    desc: "more than percentage users",
  },
];

const Stats:React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-4 gap-2 lg:gap-5">
      {stats.map((stat) => (
        <div key={stat.id} className="col-span-1 p-1 lg:p-4 rounded-md bg-slate-600">
          <div className="flex gap-3">
            <span>{stat.icon}</span>
            <h2>{stat.title}</h2>
          </div>
          <div className='pr-5'>
            <h1>{stat.stats}</h1>
            <div>
                <span>{stat.percentage}%</span>
                <p>{stat.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;