import React, { useState } from "react";
import ReactCrop from "react-image-crop";

import { PhotographIcon } from "@heroicons/react/outline";
import Compressor from "compressorjs";

const convertToBase64 = (file) => {
  return new Promise((resolve) => {
    let baseURL = "";
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

function UploadPicture(props) {
  const {
    formField: { picture },
    setFieldValue,
  } = props;
  const [crop, setCrop] = useState();
  const imageUrl = localStorage.getItem("imgUrl");

  const [base64Url, setBase64Url] = useState("");

  const [previewImg, setPreviewImg] = useState(null || imageUrl);

  const handleSetImage = async (e, setFieldValue) => {
    if (!e.target.files.length) return;
    let imgUrl = e.target.files[0];

    convertToBase64(imgUrl)
      .then((result) => {
        setBase64Url(result);
        setFieldValue("pictureUrl", result);
        localStorage.setItem("imgUrl", result);
        localStorage.setItem("loginImgUrl", result);
      })
      .catch((err) => {
        console.log(err);
      });

    // try {
    //   new Compressor(imgUrl, {
    //     quality: 0.1,
    //     success: (compressedResult) => {
    //       convertToBase64(compressedResult)
    //         .then((result) => {
    //           setBase64Url(result);
    //           setFieldValue("pictureUrl", result);
    //           localStorage.setItem("imgUrl", result);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     },
    //   });
    // } catch (e) {
    //   convertToBase64(imageUrl)
    //     .then((result) => {
    //       setBase64Url(result);
    //       setFieldValue("pictureUrl", result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    setPreviewImg(URL.createObjectURL(imgUrl));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex h-96 w-96 flex-col items-center justify-center gap-3 rounded-2xl 
                        border border-blue-500"
        >
          {previewImg ? (
            <ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspect={1 / 1}>
              <img
                src={previewImg}
                alt="Your password"
                className="h-96 w-96 rounded-2xl object-cover overflow-hidden"
              />
            </ReactCrop>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <h6>Upload your picture </h6>
              <PhotographIcon className="text-blue-500 w-16 h-16" />
            </div>
          )}

          <input
            type="file"
            id={picture.name}
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              handleSetImage(event, setFieldValue);
            }}
          />
        </div>
        <div className="my-5 flex w-full items-center justify-between gap-3">
          <label
            htmlFor={picture.name}
            className="rounded-full border bg-blue-500 px-6 py-2 text-white 
                    hover:border-blue-500 hover:bg-transparent 
                      hover:text-blue-500 disabled:bg-gray-300"
          >
            Choose picture
          </label>
        </div>
      </div>
    </>
  );
}

export default UploadPicture;
