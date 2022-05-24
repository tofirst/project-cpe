import { Transition } from "@headlessui/react";
import { Formik, Form } from "formik";
import React from "react";
import FormikStepper from "./FormikStepper";
import PasswordPage from "./StepForms/passwordStep";
import SigninPage from "./StepForms/signinStep";

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

function StepForm() {
  return (
    <>
      <FormikStepper
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await sleep(3000);
          alert(values.email);
        }}
      >
        <Transition
          appear={true}
          show
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="w-[420px] bg-white rounded-md shadow-md p-10 flex 
                      flex-col justify-center gap-5"
          >
            <SigninPage />
          </div>
        </Transition>

        <Transition
          appear={true}
          show
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="w-[420px] bg-white rounded-md shadow-md p-10 flex 
                      flex-col justify-center gap-5"
          >
            <PasswordPage />
          </div>
        </Transition>
      </FormikStepper>
    </>
  );
}

export default StepForm;
