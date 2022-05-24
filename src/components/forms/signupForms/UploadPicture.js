import React, { useState } from "react";
import ReactCrop from "react-image-crop";

import { PhotographIcon } from "@heroicons/react/outline";

function UploadPicture() {
  const [crop, setCrop] = useState();
  const imageUrl = localStorage.getItem("imgUrl");

  const [previewImg, setPreviewImg] = useState(null || imageUrl);

  const handleSetImage = (e) => {
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
    localStorage.setItem("imgUrl", URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex h-96 w-96 flex-col items-center justify-center gap-3 rounded-2xl 
                        border border-dashed border-blue-500"
        >
          {previewImg ? (
            <ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspect={1 / 1}>
              <img
                src={previewImg}
                alt="Your password"
                className="h-96 w-96 rounded-2xl object-cover"
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
            name="chooseimgUrl"
            id="chooseimgUrl"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleSetImage(e)}
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="chooseimgUrl"
            className="w-full rounded-full border bg-blue-500 px-6 py-2 text-white 
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
