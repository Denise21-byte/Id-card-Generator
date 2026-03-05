import React from 'react';
import IdCard from "./components/IdCard";
// Assuming you created a data folder as planned
import people from "./data/people"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        ID Card Generator
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {people.map((person) => (
          <IdCard
            key={person.id}
            id={person.id}
            name={person.name}
            role={person.role}
            department={person.department}
            avatar={person.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;