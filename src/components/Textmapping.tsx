'use client'
import React, { useState } from 'react';

// 1. THE DATA (The "Spreadsheet")
// We link the 'input' (full text) to the 'output' (summary) using a unique ID.
const dataMap = [
  {
    id: '1',
    inputText: "The patient arrived complaining of sharp and worsening abdominal pain.",
    outputText: "sharp and worsening abdominal pain"
  },
  {
    id: '2',
    inputText: "Vitals showed elevated heart rate but normal blood pressure.",
    outputText: "elevated heart rate"
  },
  {
    id: '3',
    inputText: "CT scan was recommended to rule out appendicitis.",
    outputText: "CT scan recommended"
  },
  // Adding filler data to make sure the box is scrollable
  { id: '4', inputText: "Patient has no known allergies.", outputText: "No allergies" },
  { id: '5', inputText: "Family history includes diabetes.", outputText: "History: Diabetes" },
  { id: '6', inputText: "Follow up scheduled for next week.", outputText: "Follow up: 1 week" },
  { id: '7', inputText: "Prescribed mild painkillers.", outputText: "Rx: Painkillers" },
];

const Assessment = () => {
  const [activeId, setActiveId] = useState(null);

  // 2. THE LOGIC (The "Engine")
  const handleScroll = (id:any) => {
    // Step A: Find the element in the Input Box using its unique ID
    const element = document.getElementById(`input-item-${id}`);

    if (element) {
      // Step B: Scroll the element into the center of the view
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Step C: Turn ON the highlight (Yellow Flash)
      setActiveId(id);

      // Step D: Turn OFF the highlight after 2 seconds
      setTimeout(() => {
        setActiveId(null);
      }, 2000);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center">Assessment 1: Text Mapper</h1>

      <div className="flex gap-6 h-125 max-w-4xl mx-auto">
        
        {/* === LEFT BOX: INPUT (The Source) === */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h2 className="text-lg font-bold mb-4 border-b pb-2">Input Box (Source)</h2>
          
          <div className="overflow-y-auto flex-1 space-y-4 pr-2">
            {dataMap.map((item) => (
              <p
                key={item.id}
                id={`input-item-${item.id}`} // Assigning the Address
                className={`p-2 rounded transition-all duration-500 border border-transparent
                  ${activeId === item.id ? 'bg-yellow-500 border-yellow-400 text-red-600 scale-[1]' : 'hover:bg-gray-50'}
                `}
              >
                {item.inputText}
              </p>
            ))}
          </div>
        </div>

        {/* === RIGHT BOX: OUTPUT (The Trigger) === */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h2 className="text-lg font-bold mb-4 border-b pb-2">Output Box (Click Me)</h2>
          
          <div className="overflow-y-auto flex-1 space-y-2 pr-2">
            {dataMap.map((item) => (
              <div
                key={item.id}
                onClick={() => handleScroll(item.id)} // The Click Event
                className="cursor-pointer p-3 bg-blue-50 text-blue-800 rounded hover:bg-blue-100 hover:shadow transition-colors flex justify-between items-center"
              >
                <span>{item.outputText}</span>
                <span className="text-blue-300">→</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Assessment;