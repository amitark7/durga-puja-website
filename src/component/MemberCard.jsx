import React from "react";

const MemberCard = ({ member }) => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full bg-white overflow-hidden">
        <div className="relative">
          <img
            src={member.image}
            alt="Profile"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Info Section */}
        <div className="text-center p-4">
          <h1 className="text-xl font-bold text-gray-800">{member.name}</h1>
          <p className="text-gray-500">{member.post}</p>
          <a
            href="tel:+917004762919"
            className="mt-2 inline-block text-blue-500 hover:underline text-sm"
          >
            {`📞 +91 ${member.number}`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
