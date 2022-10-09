import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect
} from "react";
import Compressor from "compressorjs";
const FileContetxt = createContext();

export function useFile() {
  return useContext(FileContetxt);
}
export function FileContextProvider({ children }) {
  const [imgSrc, setSrc] = useState(null);
  const [image, setImage] = useState(null);
  const [postImg, setPostImg] = useState(null);
  const [imgSize, setImgSize] = useState({
    width: null,
    height: null
  });

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      console.log(readerEvent);
      setImage(readerEvent.target.result);
      setSrc(readerEvent.target.result);
    };
  };

  const getImage = async (image) => {
    await window.localStorage.setItem("croppedImage", JSON.stringify(image));
  };

  function handleUploadCompress(e) {
    if (e.target.files[0]) {
      const imgs = e.target.files[0];
      new Compressor(imgs, {
        quality: 0.8,
        success: (compressedResult) => {
          setImage(URL.createObjectURL(compressedResult));
        }
      });
    }
  }
  function handleChangefunction(e) {
    if (e.target.files[0]) {
      let img = new Image();
      img.src = URL.createObjectURL(e.target.files[0]);

      img.onload = () => {
        setImgSize({
          width: img.width,
          height: img.height
        });
      };
    }

    setImage(URL.createObjectURL(e.target.files[0]));
  }
  function cancleE() {
    setImage(null);
    setSrc(null);
    setImgSize({
      width: null,
      height: null
    });
  }

  function savePostImage(img) {
    setPostImg(img);
  }
  const values = {
    image,
    handleChangefunction,
    imgSize,
    addImageToPost,
    imgSrc,
    cancleE,
    savePostImage,
    postImg,
    onUpload: handleUploadCompress
  };
  return (
    <FileContetxt.Provider value={values}>{children}</FileContetxt.Provider>
  );
}
