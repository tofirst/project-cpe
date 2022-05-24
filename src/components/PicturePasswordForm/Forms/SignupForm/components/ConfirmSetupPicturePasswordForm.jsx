import React, { useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import Swal from "sweetalert2";

const ConfirmSetPicture = (props) => {
  const { setFieldValue, values } = props;
  const [passwordStep, setPasswordStep] = useState(0);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);

  const [stepCount] = useState(parseInt(values.point));

  const [imageUrl] = useState(localStorage.getItem("imgUrl"));
  const [loading] = useState(false);

  const handleResetPassword = () => {
    setPasswordStep(0);
    setStep(0);
    setPassword("");
  };

  useEffect(() => {
    const handleDecrypt = () => {
      return bcrypt.compareSync(
        password,
        localStorage.getItem("hashedPassword")
      );
    };
    if (passwordStep === stepCount) {
      if (handleDecrypt()) {
        setFieldValue("password", localStorage.getItem("hashedPassword"));
        localStorage.removeItem("imgUrl");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Your confirm password not match!",
          icon: "error",
          confirmButtonText: "Try again!",
        });
        handleResetPassword();
      }
    }
  }, [passwordStep, password, stepCount, setFieldValue]);

  const handleSetPassword = (newPoint) => {
    setStep((prevStep) => prevStep + 1);
    setPasswordStep((prev) => prev + 1);
    setPassword((prevPassword) => prevPassword + newPoint);
  };
  return (
    <>
      {loading ? (
        <h6 className="animate-bounce">Loading...</h6>
      ) : (
        <div className="flex flex-col items-start justify-center gap-3">
          {/* <h5 className="text-center text-3xl font-medium">{title}</h5> */}
          <h6 className="w-full text-center text-base ">
          Click the picture position you want to register
          </h6>

          <div
            className="relative flex h-96 w-96 flex-col items-center 
                      justify-center overflow-hidden shadow-sm"
          >
            <img
              src={imageUrl}
              alt="password preview"
              className="h-96 w-96 border border-blue-500 object-cover"
            />
            <div className="absolute z-10 flex flex-wrap">
              {[...Array(64).keys()].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSetPassword(index)}
                  className="m-0 h-12 w-12 "
                ></button>
              ))}
            </div>
          </div>
          <div className="my-5 flex w-full items-center justify-between gap-3">
            <button
              type="button"
              id="next-button"
              onClick={handleResetPassword}
              className="w-24 rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300"
            >
              Reset
            </button>
            <div className="flex gap-4">
              {[...Array(stepCount).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    className={`h-4 w-4 rounded-full   bg-white ${
                      step >= idx + 1 ? "bg-blue-500" : "bg-gray-300"
                    } shadow `}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmSetPicture;
