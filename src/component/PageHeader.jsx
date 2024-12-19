import React from "react";

const PageHeader = ({ text }) => {
  const headerStyle = {
    backgroundImage: `url(
      "https://images.unsplash.com/photo-1732740676396-ece9a9148342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D"
    )`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "25vh",
  };

  return (
    <header
      className="w-full relative z-0"
      style={headerStyle}
      aria-label="Page Header"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="relative flex items-center justify-center h-full">
        <div className="p-4 bg-opacity-60 rounded-md z-0">
          <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
            {text}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
