import React from "react";

const Carousel = () => {
  return (
    <div className="my-16">
      <div className="carousel w-4/5 mx-auto rounded-lg h-96 min-h-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://www.igeeksblog.com/wp-content/uploads/2022/09/Download-iPhone-14-wallpapers.png"
            alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-secondary">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cdn.appleosophy.com/2022/09/iphone14.png"
            alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-secondary">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.panasiabiz.com/wp-content/uploads/2022/08/iphone-14.jpeg"
            alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-secondary">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
