import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import LeadCaptureForm from "./components/LeadCaptureForm";
import car from './assets/car.jpg';

function App() {
  const [leadData, setLeadData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleNewLead = (lead) => {
    setLeadData([...leadData, lead]);
  };

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${car})`, zIndex: -1 }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">Car Insurance CRM</h1>
          <button
            onClick={toggleForm}
            className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-400 hover:text-orange-900 text-white font-semibold rounded-lg shadow-md transform transition-all duration-200 hover:scale-105"
          >
            {showForm ? "Close Lead Form" : "Add New Lead"}
          </button>
        </header>
        
        <div className="p-8">
          {showForm && <LeadCaptureForm onSubmit={handleNewLead} />}
          <Dashboard leads={leadData} />
        </div>
      </div>
    </div>
  );
}

export default App;
