import React from "react";

const EventCard = ({ event }) => {
  const date = new Date(`${event.eventDate}T${event.eventTime}`);

  const day = date.getDate().toString().padStart(2, "0");
  const month = date
    .toLocaleString("default", { month: "short" })
    .toUpperCase();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return (
    <div className="relative bg-white w-full md:w-[250px] xl:w-[330px] shadow-md pl-6 pr-8 pt-4 pb-12 w-64">
      <div className="ribbon absolute -top-2 right-4 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.4)]">
        <div className="clip-path-polygon-[0_0,_100%_0,_100%_100%,_50%_calc(100%_-_8px),_0_100%] flex h-20 w-14 justify-center bg-blue-400 py-3 px-1 text-center text-lg font-bold text-white">
          <div>
            <p className="text-2xl text-white font-bold leading-none">{day}</p>
            <p className="text-lg text-white uppercase">{month}</p>
          </div>
        </div>
      </div>

      <div className="">
        <h3 className="text-lg font-semibold text-gray-800">
          {event.eventName}
        </h3>
        <p className="flex items-center text-gray-600 mt-2">
          {/* Clock Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12A6 6 0 0110 4zm-.75 4a.75.75 0 011.5 0v3a.75.75 0 01-.75.75H8a.75.75 0 010-1.5h1.25V8z"
              clipRule="evenodd"
            />
          </svg>
          {`${hours}:${minutes} ${amPm}`}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
