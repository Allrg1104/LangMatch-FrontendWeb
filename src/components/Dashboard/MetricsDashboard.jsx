import React from "react";
import DashboardHome from "./DashboardHome";
import UsersTable from "./UsersTable";
import ConversationsTable from "./ConversationsTable";

const MetricsDashboard = () => {
    return (
        <div className="container-fluid py-4">
            <h4 className="mb-4 text-primary">Panel de Métricas</h4>

            <DashboardHome />

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

export default MetricsDashboard;
