import React, { useEffect, useState } from "react";
import PageHeader from "../component/PageHeader";
import MemberCard from "../component/MemberCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getMemberList } from "../store/reducer/reducer";

const Contact = () => {
  const [query, SetQuery] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const host = "https://startup-stories.onrender.com/query";

  const { memberList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemberList());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: query.name,
        email: query.email,
        subject: query.subject,
        message: query.message,
      }),
    });
    const data = await response.json();
    console.log(data);
    alert("Query Submitted Successfully");
    SetQuery({ name: "", email: "", subject: "", message: "" });
  };

  const onChange = (e) => {
    SetQuery({ ...query, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeader text={"Contact"} />

      <div className="container mx-auto py-10 px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-darkBlue">
              Contact for Any Queries
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="w-full my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  onChange={onChange}
                  value={query.name}
                  placeholder="Full Name"
                  className="border p-3 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  onChange={onChange}
                  value={query.email}
                  placeholder="Email Address"
                  className="border p-3 outline-none"
                />
              </div>
              <input
                type="text"
                name="subject"
                onChange={onChange}
                value={query.subject}
                placeholder="Subject"
                className="w-full border p-3 my-4 outline-none"
              />
              <textarea
                name="message"
                onChange={onChange}
                value={query.message}
                placeholder="Enter Your Message"
                className="w-full p-3 resize-none h-[100px] border my-4 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-3 rounded-md hover:bg-darkBlueHover transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="min-h-[400px] relative">
            <iframe
              id="frame1"
              title="location"
              className="w-full h-full border-none rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28820.594246325545!2d86.03045687516108!3d25.452492636663106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f20e4c5627c635%3A0xe09373e8d6bc625d!2sDurga%20Mandir%20Bathauli!5e0!3m2!1sen!2sin!4v1734092520985!5m2!1sen!2sin"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="m-auto p-4 bg-white py-10">
        <div className="my-4 text-center">
          <h1 className="text-sm text-yellow-500 font-semibold mb-2">
            Meet Our Team
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold">सदस्य</h1>
        </div>

        {memberList.length === 0 ? (
          <div className="text-center text-gray-500 my-14 font-semibold text-xl">
            No team members available
          </div>
        ) : (
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
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
