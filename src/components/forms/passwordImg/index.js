import React, { useCallback, useEffect, useState } from "react";
import bcrypt from "bcryptjs";

function PasswordImage(props) {
  const { setStep, stepCount, imageUrl, loading } = props;
  const [passwordStep, setPasswordStep] = useState(0);
  const [password, setPassword] = useState("");

  var salt = bcrypt.genSaltSync(8);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResetPassword = useCallback(() => {
    setPasswordStep(0);
    setStep(0);
    setPassword("");
  });

  useEffect(() => {
    const handleEncrypt = () => {
      const hashedPassword = bcrypt.hashSync(password, salt); // hash created previously created upon sign up
      alert(`Reach ${stepCount} point and password is ${hashedPassword}`);

      localStorage.setItem("hashedPassword", hashedPassword);
    };

    const handleDecrypt = () => {
      console.log(
        ` ${bcrypt.compareSync(
          password,
          localStorage.getItem("hashedPassword")
        )}`
      );
    };

    if (passwordStep === stepCount) {
      handleEncrypt();
      handleDecrypt();
      setTimeout(() => {
        handleResetPassword();
      }, 1000);
    }
  }, [passwordStep, password, stepCount, salt, setStep, handleResetPassword]);

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
          <div className="relative flex h-96 w-96 flex-col items-center justify-center overflow-hidden shadow-sm">
            <img
              src={imageUrl}
              alt="password preview"
              className="h-96 w-96 object-cover"
            />
            <div className="absolute z-10 flex flex-wrap">
              {[...Array(64).keys()].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSetPassword(index)}
                  className="m-0 h-12 w-12 animate-pulse border border-red-400"
                ></button>
              ))}
            </div>
          </div>
          <button
            type="button"
            id="next-button"
            onClick={handleResetPassword}
            className="w-24 rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300"
          >
            Reset
          </button>
        </div>
      )}
    </>
  );
}

export default PasswordImage;
