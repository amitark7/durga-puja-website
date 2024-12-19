import React, { useEffect } from "react";
import PageHeader from "../component/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getImageList } from "../store/reducer/reducer";

const Galleries = () => {
  const { galleryList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageList());
  }, []);

  return (
    <>
      <PageHeader text={"Galleries"} />
      <div className="w-full max-w-7xl mx-auto p-4">
        <div className="my-4 text-center">
          <h1 className="text-sm text-yellow-500 font-semibold mb-2">
            Our Gallery
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold">Popular Gallery</h1>
        </div>
        {galleryList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mb-14">
            {galleryList.map((gallery, index) => (
              <div key={index} className="relative group">
                <img
                  src={gallery.image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-lg">
                  <span className="text-white text-lg font-semibold">
                    Image {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center my-14 ">
            <p className="text-lg text-gray-500 font-semibold">
              No images available
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Galleries;
