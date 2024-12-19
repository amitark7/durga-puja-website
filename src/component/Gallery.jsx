import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImageList } from "../store/reducer/reducer";

const Gallery = () => {
  const { galleryList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageList());
  }, [dispatch]);

  return (
    <div className="m-auto p-4 bg-yellow-50 py-10">
      <div className="my-4 text-center">
        <h1 className="text-sm text-yellow-500 font-semibold mb-2">
          Our Gallery
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold">Popular Gallery</h1>
      </div>
      <div className="w-[80%] m-auto mt-12 py-12">
        {galleryList.length === 0 ? (
          <div className="text-center text-gray-500 text-xl font-semibold">
            No images available
          </div>
        ) : (
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
            {galleryList.slice(0, 6).map((gallery, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden w-full md:w-[280px] lg:w-[250px] xl:w-[350px] h-[280px] shadow-lg">
                  <img
                    src={gallery.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}

            {galleryList.length > 6 && (
              <SwiperSlide>
                <div className="overflow-hidden w-full md:w-[280px] lg:w-[250px] xl:w-[350px] h-[280px] shadow-lg flex justify-center items-center bg-yellow-200">
                  <button className="text-lg text-blue-500 font-semibold">
                    <Link to="/gallery">View More</Link>
                  </button>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Gallery;
