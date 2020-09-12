import React, { useEffect, useRef, useState } from "react";
import ImageUploader from "./imageuploader";
import QuaggaComponent from "./quagga";
const Conatiner = () => {
  const [img, setImg] = useState(null);
  const imgRef = useRef(null);
  const [uploaded, setUploaded] = useState(true);
  const imgCropped = (previewRef) => {
    imgRef.current = previewRef;
    setImg(previewRef);
    setUploaded(!uploaded);
  };

  useEffect(() => {
    // console.log("changed");
  }, [uploaded, img]);

  return (
    <>
      <ImageUploader imgCropped={imgCropped} />
      <QuaggaComponent img={imgRef} />
    </>
  );
};

export default Conatiner;
