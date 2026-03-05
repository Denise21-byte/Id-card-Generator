import React from 'react';
function IdCard({ name, role, department, avatar, id }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-72 border">
      <img 
        src={avatar} 
        alt={name} 
        className="w-24 h-24 rounded-full mx-auto"
      />

      <div className="text-center mt-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-500">{department}</p>
        <p className="text-xs mt-2 text-blue-600">ID: {id}</p>
      </div>
    </div>
  );
}

export default IdCard;

//import image from '../assets/picture.png'; we write it at top in file.jsx