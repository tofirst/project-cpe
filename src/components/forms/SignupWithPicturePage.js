import React, { useState } from "react";
import { Formik, Form } from "formik";

import UploadPicture from "components/forms/signupForms/UploadPicture";
import { ChoosePoint } from "components/forms/signupForms";
import ConfirmSetPicture from "./signupForms/ConfirmSetPicture";
import SetPicture from "./signupForms/SetPicture";

// import { CloudUploadIcon } from "@heroicons/react/solid";

const SignupWithPicturePage = (props) => {
  const { title, prevPage } = props;

  const [step, setStep] = useState(0);
  const [stepCount, setStepCount] = useState(4);


  const increateStep = () => setStep((prev) => setStep((prev = prev + 1)));
  const decreateStep = () => setStep((prev) => setStep((prev = prev - 1)));

  function renderSwitch(step) {
    switch (step) {
      case 0:
        return <UploadPicture />;

      case 1:
        return <ChoosePoint setPoint={setStepCount} />;

      case 2:
        return <SetPicture next={increateStep} />;

      case 3:
        return <ConfirmSetPicture point={stepCount} />;

      default:
        break;
    }
  }

  const [previewImg, setPreviewImg] = useState(
    "https://s.isanook.com/mv/0/ud/24/122053/sejeong-1.jpg"
  );

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          chooseimgUrl: "",
        }}
        onSubmit={(values) => console.log(JSON.stringify(values))}
      >
        {() => (
          <Form>
            <div className="flex w-[780px] flex-col gap-4">
              <h5 className="text-center text-3xl font-medium">{title}</h5>

              <div className="mt-6 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-blue-500"></div>
                <div className="h-1 w-12  bg-blue-500 "></div>

                <div className="h-5 w-5 rounded-full bg-blue-500"></div>
                <div className="h-1 w-12 bg-gray-300"></div>

                <div className="h-5 w-5 rounded-full bg-gray-300"></div>
              </div>

              <div className="mt-10 grid w-full grid-cols-2 items-center justify-center gap-6">
                <div className="">
                  <h6>Register Picture Password</h6>
                  <div className="grid grid-cols-1">
                    <div className="col-span-5 mt-10 flex flex-col gap-10 text-gray-300">
                      <div
                        className={`${
                          "text-blue-500"
                        } flex w-full items-center justify-start gap-3 text-blue-500`}
                      >
                        <span>
                          <div
                            className={`h-5 w-5 rounded-full bg-blue-500`}
                          ></div>
                        </span>
                        Upload the picture you want to set as your password.
                      </div>
                      <div
                        className={` ${
                          step > 0 ? "text-blue-500" : "text-gray-300"
                        } flex w-full items-center justify-start gap-3`}
                      >
                        <span>
                        <div
                            className={`h-5 w-5 rounded-full ${step > 0 ? "bg-blue-500" : "bg-gray-300"} `}
                          ></div>
                        </span>
                        Choose the number of password points. (4-7 points)
                      </div>
                      <div
                        className={` ${
                          step > 1 ? "text-blue-500" : "text-gray-300"
                        } flex w-full items-center justify-start gap-3`}
                      >
                        <span>
                        <div
                            className={`h-5 w-5 rounded-full ${step > 1 ? "bg-blue-500" : "bg-gray-300"} `}
                          ></div>
                        </span>
                        Click the location you want to register.
                      </div>
                      <div
                        className={` ${
                          step > 2 ? "text-blue-500" : "text-gray-300"
                        } flex w-full items-center justify-start gap-3`}
                      >
                        <span>
                          <div
                            className={`h-5 w-5 rounded-full ${step > 2 ? "bg-blue-500" : "bg-gray-300"} `}
                          ></div>
                        </span>
                        Repeat the location you want to register.
                      </div>
                    </div>
                  </div>
                </div>

                {renderSwitch(step)}
              </div>

              <div className="w-ful mt-10 flex justify-end gap-4">
                <button
                  onClick={decreateStep}
                  disabled={step === 0}
                  type="button"
                  id="next-button"
                  className="w-36 rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300"
                >
                  Prev
                </button>
                {step < 3 && <button
                  onClick={increateStep}
                  type="submit"
                  id="next-button"
                  className="w-36 rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300"
                >
                  Next
                </button>}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupWithPicturePage;
