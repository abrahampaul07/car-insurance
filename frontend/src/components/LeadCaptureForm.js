import React, { useState } from "react";

const LeadCaptureForm = ({ onSubmit }) => {
  const [lead, setLead] = useState({
    name: "",
    carModel: "",
    insuranceType: "Comprehensive",
    leadSource: "Website",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead((prevLead) => ({
      ...prevLead,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(lead);
    setLead({
      name: "",
      carModel: "",
      insuranceType: "Comprehensive",
      leadSource: "Website",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-transparent p-8 rounded-lg shadow-xl space-y-6">
      <h3 className="text-3xl font-bold text-yellow-400 mb-4">Capture New Lead</h3>
      <div className="space-y-4">
        <label className="block">
          <span className="text-white">Name:</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={lead.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 bg-black bg-opacity-60 text-white border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-white">Car Model:</span>
          <input
            type="text"
            name="carModel"
            placeholder="Car Model"
            value={lead.carModel}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 bg-black bg-opacity-60 text-white border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-white">Insurance Type:</span>
          <select
            name="insuranceType"
            value={lead.insuranceType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 bg-black bg-opacity-60 text-white border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
          >
            <option value="Comprehensive">Comprehensive</option>
            <option value="Third-Party">Third-Party</option>
            <option value="Add-Ons">Add-Ons</option>
          </select>
        </label>

        <label className="block">
          <span className="text-white">Lead Source:</span>
          <select
            name="leadSource"
            value={lead.leadSource}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 bg-black bg-opacity-60 text-white border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
          >
            <option value="Website">Website</option>
            <option value="Social Media">Social Media</option>
            <option value="Referral">Referral</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="md:w-[30%] w-full py-4 bg-yellow-400 hover:bg-yellow-400 text-white hover:text-orange-900 font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
};

export default LeadCaptureForm;
