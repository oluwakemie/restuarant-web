import React from "react";
import img2 from "../../src/assets/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: img2,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Na ullam libero maxime rem eveniet vel ab, cupiditate quasi delectus",
  },
  {
    id: 2,
    img: img2,
    name: "Chicken kari",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Na ullam libero maxime rem eveniet vel ab, cupiditate quasi delectus",
  },
  {
    id: 2,
    img: img2,
    name: "Cold Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Na ullam libero maxime rem eveniet vel ab, cupiditate quasi delectus",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10 bg-white dark:bg-gray-800">
        <div className="container ">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold"> Services</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              ullam libero maxime rem eveniet vel ab, cupiditate quasi delectus
              atque tempora doloremque? Quam exercitatione
            </p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1  sm:grid-cols-3  md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map(({ id, img, name, description }) => {
              return (
                <div
                  key={id}
                  className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:text-white duration-300 shadow-xl"
                >
                  <div className="h-[100px] ">
                    <img
                      src={img}
                      alt=""
                      className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 "
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold text-black dark:text-white">{name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
