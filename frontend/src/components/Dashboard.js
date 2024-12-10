import React from "react";
import LeadList from "./LeadList";

const Dashboard = ({ leads }) => {
  return (
    <div className="rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-yellow-400 pt-5 mb-6 text-center">
        Leads Overview
      </h2>
      {/* Lead List Container */}
      <div className="space-y-6">
        <LeadList leads={leads} />
      </div>
    </div>
  );
};

export default Dashboard;
