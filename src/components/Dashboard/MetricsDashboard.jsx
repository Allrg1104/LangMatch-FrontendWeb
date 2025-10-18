import React from "react";
import LanguagePieChart from "./Charts/LanguagePieChart";
import LevelBarChart from "./Charts/LevelBarChart";
import AvgConversationTimeCard from "./Charts/AvgConversationTimeCard";
import TopUsersChart from "./Charts/TopUsersChart";
import TopTopicsChart from "./Charts/TopTopicsChart";

const MetricsDashboard = () => {
    return (
        <div className="container-fluid">
            <h4 className="mb-4">Panel de Métricas</h4>

            <div className="row">
                <div className="col-md-4">
                    <AvgConversationTimeCard />
                </div>
                <div className="col-md-8">
                    <LanguagePieChart />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <LevelBarChart />
                </div>
                <div className="col-md-6">
                    <TopTopicsChart />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <TopUsersChart />
                </div>
            </div>
        </div>
    );
};

export default MetricsDashboard;
