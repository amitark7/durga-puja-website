import React, { useEffect } from "react";
import PageHeader from "../component/PageHeader";
import EventCard from "../component/EventCard";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../store/reducer/reducer";

const Events = () => {
  const { eventList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <>
      <PageHeader text={"Events"} />
      <div className="m-auto p-4 bg-yellow-50 py-10">
        <div className="my-4 text-center">
          <h1 className="text-sm text-yellow-500 font-semibold mb-2">
            Our Events
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            आगामी कार्यक्रम
          </h1>
        </div>

        {eventList.length === 0 ? (
          <div className="text-center text-xl my-14 text-gray-500 font-semibold text-lg">
            No events available
          </div>
        ) : (
          <div className="w-full sm:w-[90%] lg:w-[80%] m-auto my-14 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {eventList.map((event, index) => {
              return <EventCard key={index} event={event} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Events;
