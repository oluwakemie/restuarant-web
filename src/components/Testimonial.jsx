import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, asperiores laudantium fuga molestias, quas, aut eaque quisquam aspernatur voluptas cupiditate nemo corporis. Et odio qui porro, aspernatur veritatis recusandae mollitia.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, asperiores laudantium fuga molestias, quas, aut eaque quisquam aspernatur voluptas cupiditate nemo corporis. Et odio qui porro, aspernatur veritatis recusandae mollitia.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, asperiores laudantium fuga molestias, quas, aut eaque quisquam aspernatur voluptas cupiditate nemo corporis. Et odio qui porro, aspernatur veritatis recusandae mollitia.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pasueOnFocus: true,
  };
  return (
    <>
      <div className="py-10  bg-white dark:bg-gray-800 dark:text-white ">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-radient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
              maxime dolorum culpa neque quisquam exercitationem ipsa impedit
              deleniti corrupti officiis.
            </p>
          </div>
          {/* testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg mx-4 rounded-xl dark:bg-gray-500  bg-primary/10 relative ">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />{" "}
                      <p className="text-gray-500 text-sm dark:text-white">{text}</p>
                      <h1 className="text-xl font-bold ">{name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-white">,,</p>
                    </div>
                  </div>
                  );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
