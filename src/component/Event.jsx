import React, { useEffect } from "react";
import EventCard from "./EventCard";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../store/reducer/reducer";
import { Link } from "react-router-dom";

const Event = () => {
  const { eventList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div className="m-auto p-4 bg-yellow-50 py-10">
      {/* Header Section */}
      <div className="my-4 text-center">
        <h1 className="text-sm text-yellow-500 font-semibold mb-2">
          Our Events
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          आगामी कार्यक्रम
        </h1>
      </div>

      {/* Events Grid Section */}
      <div className="w-full sm:w-[90%] lg:w-[80%] m-auto mt-14 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {eventList.length > 0 ? (
          eventList.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <p className="text-center text-xl mb-14 text-gray-500 col-span-full">
            No events available
          </p>
        )}
      </div>

      {/* Button Section */}
      {eventList.length > 0 && (
        <div className="text-center mb-8 mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-xs sm:text-sm py-3 px-4 rounded-lg text-white font-semibold">
            <Link to="/event">View More Events</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Event;
