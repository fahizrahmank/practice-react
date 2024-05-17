import React, { useEffect, useState } from "react";

const ImageSlider = ({ url, limit }) => {
  const [image, setImage] = useState([]);
  const [slide, setSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  }
  useEffect(() => {
    if (url !== " ") fetchImages(getUrl);
  }, [url]);

  if (loading) {
    return (
      <div>
        <h1>loading data ..plss wait...</h1>
      </div>
    );
  }
  if (errorMsg !== null) {
    return (
      <div>
        <h1> error occured {errorMsg} </h1>
      </div>
    );
  }

  return <div className="container">ImageSlider</div>;
};

export default ImageSlider;
