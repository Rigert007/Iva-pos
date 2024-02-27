import React from "react";
import PieChart from "../Components/PieChart.jsx";
import InfoCard from "../Components/InfoCards.jsx";
import "../style/Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="i-card">
                <InfoCard title="Sales Today" value="7700 Lekë" />
                <InfoCard title="Invoices" value="6" />
                <InfoCard title="Total Customer" value="43" />
                <InfoCard title="New Customer" value="6" />
                <InfoCard title="Items" value="123" />
            </div>
            <PieChart />
        </div>
    );
};

export default Dashboard;
