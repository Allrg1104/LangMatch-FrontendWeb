import React from "react";
import MetricsDashboard from "./MetricsDashboard";
import UsersTable from "./UsersTable";
import ConversationsTable from "./ConversationsTable";

const DashboardHome = () => {
    return (
        <div className="container-fluid py-4">
            <h3 className="mb-4">Dashboard General</h3>

            <MetricsDashboard />

            <div className="row mt-4">
                <div className="col-md-6">
                    <UsersTable />
                </div>
                <div className="col-md-6">
                    <ConversationsTable />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
