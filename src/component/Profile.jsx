import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MemberCard from "./MemberCard";
import { useDispatch, useSelector } from "react-redux";
import { getMemberList } from "../store/reducer/reducer";

const Profile = () => {
  const { memberList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemberList());
  }, [dispatch]);

  return (
    <div className="m-auto p-4 bg-white py-10">
      {/* Header Section */}
      <div className="my-4 text-center">
        <h1 className="text-sm text-yellow-500 font-semibold mb-2">
          Meet Our Team
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold">सदस्य</h1>
      </div>

      {/* Swiper Section */}
      {memberList.length > 0 ? (
        <div className="w-full md:w-[80%] m-auto mt-2 md:mt-12 py-14">
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            speed={600}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-lg"
          >
            {memberList.slice(0, 6).map((member, index) => (
              <SwiperSlide key={index}>
                <div className="p-4">
                  <div className="overflow-hidden w-full md:w-[280px] lg:w-[250px] xl:w-[340px] shadow-lg bg-white">
                    <MemberCard member={member} />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* "View More" Button */}
            {memberList.length > 6 && (
              <SwiperSlide>
                <div className="p-4">
                  <div className="overflow-hidden w-full md:w-[280px] lg:w-[250px] xl:w-[350px] h-[353px] shadow-lg flex justify-center items-center bg-yellow-200">
                    <button className="text-lg text-blue-500 font-semibold">
                      <Link to="/contact">View More</Link>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      ) : (
        <p className="text-center text-xl mb-14 text-gray-500 mt-14">
          No members available
        </p>
      )}
    </div>
  );
};

export default Profile;
