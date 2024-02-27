import React from 'react';
import { PieChart, Pie, Cell  } from 'recharts';
import '../style/PieChart.css';

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${payload.name}: ${payload.pcs} pcs`}
        </text>
    );
};

const PieChartForm = () => {
    const data = [
        { name: 'Drinks', pcs: 1000 },
        { name: 'Food', pcs: 700 },
        { name: 'Delivery', pcs: 500 },
        { name: 'Pick up', pcs: 100 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="chart-container  mt-5 text-center">
            <h3>Category Sales</h3>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="pcs"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default PieChartForm;
