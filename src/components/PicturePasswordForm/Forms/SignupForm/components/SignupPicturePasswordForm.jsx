import React, { useState } from "react";
import { Formik, Form } from "formik";
import "../../../../../styles/signupcss.css";
import {
  SignupUsernameAndEmailForm,
  UploadPictureForm,
  SecurityInfoForm,
  SetupPicturePasswordForm,
  ConfirmSetupPicturePasswordForm,
} from "components/PicturePasswordForm/Forms/SignupForm/components";

import { description } from "components/constants/signUpStepDescription";
import { signupForminitialValues } from "components/PicturePasswordForm/FormModel/formInitialValues";
import { signupFormModel } from "components/PicturePasswordForm/FormModel/formModel";
import Swal from "sweetalert2";

const { formId, formField } = signupFormModel;

const _renderStepContent = (step, setFieldValue, values) => {
  switch (step) {
    case 0:
      return <SignupUsernameAndEmailForm formField={formField} />;
    case 1:
      return (
        <UploadPictureForm
          formField={formField}
          setFieldValue={setFieldValue}
        />
      );
    case 2:
      return <SecurityInfoForm formField={formField} />;
    case 3:
      return <SetupPicturePasswordForm formField={formField} values={values} />;
    case 4:
      return (
        <ConfirmSetupPicturePasswordForm
          formField={formField}
          setFieldValue={setFieldValue}
          values={values}
        />
      );
    default:
      return <div>Not Found</div>;
  }
};


const passwordArr = [
  {
    position: {
      x: 123,
      y: 14
    },
    rad: 12
  },
  {
   position: {
     x: 123,
     y: 14
   },
   rad: 17
 },{
   position: {
     x: 123,
     y: 14
   },
   rad: 9
 },
 {
   position: {
     x: 123,
     y: 14
   },
   rad: 1
 },
 {
   position: {
     x: 123,
     y: 14
   },
   rad: 0.4
 }
]

passwordArr.map(pos => {
  let sum = pos.position.x + pos.position.y
  let rad = pos.rad

  let circleArea = Math.pow(rad, 2) * Math.PI


  console.log(circleArea)
})



const steps = [
  "Enter email and username",
  "Upload picture",
  "Setup sucurity infomation",
  "Select password",
  "Comfirm select password",
];

const SignupWithPicturePage = (props) => {
  const { title } = props;

  const [activeStep, setActiveStep] = useState(0);
  // const []

  //   const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to create your password?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          _submitForm(values, actions);
        }
      });
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handlePreviousStep() {
    setActiveStep(activeStep - 1);
  }

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    // alert(JSON.stringify(values, null, 2));
    localStorage.setItem("point", values.point);
    localStorage.setItem("username", values.username);
    localStorage.setItem("email", values.email);
    Swal.fire("Success!!", "Your password has been created.", "success").then(
      (result) => {
        if (result.isConfirmed) {
          window.location.href = "/signin";
        }
      }
    );
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  const renderStepDescription = description.map((description, idx) => (
    <li
      key={idx}
      className={` ${
        activeStep > idx - 1 ? "text-blue-500" : "text-gray-300"
      } flex w-full items-center justify-start gap-3`}
    >
      <span>
        <input
          className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none 
                    rounded-sm border border-gray-300 bg-white bg-contain bg-center 
                    bg-no-repeat align-top transition duration-200 checked:border-themeBlue 
                    checked:bg-themeBlue focus:outline-none"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          disabled
          checked={activeStep > idx - 1}
        />
      </span>
      {description.title}
    </li>
  ));

  const stepFormFields = [
    ['username', 'email'], ['pictureUrl'], ['securityInfo'],['point'],['difficulty'],['secureQuestion'],['secureAnswer'],['password']
 ];

  // check form has been fill text
  const isSAllFormhasbeenFill = (values) => {
    console.log(values);
    let isAllFormhasbeenFill = true;
    for (let key of stepFormFields[activeStep]) {
      console.log(key, values[key]);
      if (values[key].replace(/\s+/g, '') === '') {
        return false;
      }
    }
    return true;
    
  };
  
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={signupForminitialValues}
        // validationSchema={currentValidationSchema}
        onSubmit={_handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form id={formId}>
            <div className="flex w-[780px] flex-col gap-4 bg-white">
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
                  <h6 className="regis">Register Picture Password</h6>
                  <div className="grid grid-cols-1">
                    <ul className="col-span-5 mt-10 flex flex-col gap-10 text-gray-300">
                      {renderStepDescription}
                    </ul>
                  </div>
                </div>
                {_renderStepContent(activeStep, setFieldValue, values)}
              </div>

              <div className="w-ful mt-10 flex justify-end gap-4">
                <button
                  disabled={isFirstStep}
                  onClick={_handlePreviousStep}
                  type="button"
                  id="next-button"
                  className="w-36 rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300"
                >
                  Prev
                </button>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  id="next-button"
                  onClick={(event) => {

                    console.log(setFieldValue, values);
                    if (isSAllFormhasbeenFill(values)) {
                      
                    } else {
                      event.preventDefault();
                      Swal.fire({
                        title: "Error",
                        text: "Please fill all form",
                        icon: "error",
                        confirmButtonText: "OK",
                      });
                    }
                  }
                  }
                  className="w-36 rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300"
                >
                  {isLastStep ? "Submit" : "Next"}
                </button>
                {/* back to home page */}
                <button className="w-36 rounded-full border bg-orange-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300" onClick={() => window.location.href = "/"}>
                  Home Page </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupWithPicturePage;
