import React from "react";
import LeadDetails from "./LeadDetails";

const LeadList = ({ leads }) => {
  return (
    <div className="space-y-6">
      {leads.length === 0 ? (
        <p className="text-gray-500">No leads found</p>
      ) : (
        <ul className="space-y-6">
          {leads.map((lead, index) => (
            <li key={index} className="bg-transparent hover:bg-dark shadow-md rounded-lg p-6 transition-all duration-300 ease-in-out">
              <h4 className="font-semibold text-xl text-yellow-400">{lead.name} - {lead.carModel}</h4>
              <p className="text-white">Insurance Type: {lead.insuranceType}</p>
              <p className="text-white">Lead Source: {lead.leadSource}</p>
              <LeadDetails lead={lead} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeadList;
