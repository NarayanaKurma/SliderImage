import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import React from "react";
import { useEffect, useState } from "react";

import './imageSlider.css';
function ImageSlider({ url, limit }) {
  const [image, setImage] = useState([]);
  const [currentimage, setCurrentimage] = useState(0);

  async function Fethimage() {
    const response = await fetch(`${url}`);
    const data = await response.json();
    if (data) {
      return setImage(data);
    }
  }

  useEffect(() => {
    Fethimage(url);
  }, [url]);

  function handlearrowLeft() {
    setCurrentimage(currentimage === 0 ? image.length - 1 : currentimage - 1);
  }
  function handlearrowRightt() {
    setCurrentimage(currentimage === image.length - 1 ? 0 : currentimage + 1);
  }

  return (
    <>\
    <h2 style={{color:"blue"}}>IMAGE SLIDER</h2>
    <div className="Main-conatiner">
      <div className="image-container">
        <BsArrowLeftCircleFill onClick={handlearrowLeft} className="arrow arrow-left" />
        {image.map((item, index) => {
          return (
            currentimage===index && (<img key={index} src={item.download_url} alt={item.download_url} />)
          );
        })}

        <BsArrowRightCircleFill onClick={handlearrowRightt} className="arrow arrow-right" />
      <span className="circle-indicators">
        {image.map((_, index) => {
          return (
            <button
              onClick={() => {
                setCurrentimage(index);
              }}
              key={index}
           className={currentimage===index?'indicator Active':' indicator InAcive'} ></button>
          );
        })}
      </span>
      </div>
      
    </div>
    </>
  );
}

export default ImageSlider;
