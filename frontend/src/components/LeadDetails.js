import React from "react";

const LeadDetails = ({ lead }) => {
  return (
    <div className="bg-transparent mt-4 p-4 rounded-md">
      <h5 className="text-yellow-400 text-xl font-semibold">Lead Details</h5>
      <p className="text-white"><strong>Name:</strong> {lead.name}</p>
      <p className="text-white"><strong>Car Model:</strong> {lead.carModel}</p>
      <p className="text-white"><strong>Insurance Type:</strong> {lead.insuranceType}</p>
      <p className="text-white"><strong>Lead Source:</strong> {lead.leadSource}</p>
    </div>
  );
};

export default LeadDetails;
