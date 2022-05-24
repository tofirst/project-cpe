import React, { useMemo, useState } from "react";
import { Transition } from "@headlessui/react";

import SignupPage from "components/forms/SignupPage";

import { SignupPicturePasswordForm } from "components/PicturePasswordForm/Forms/SignupForm/components";

function SignupPageContainer(props) {
  const [page, setPage] = useState(0);

  const initialValues = useMemo(() => {
    return { email: localStorage.getItem("email") || "", password: "" };
  }, []);

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const handlePrevPage = () => {
    setPage((currentPage) => currentPage - 1);
  };

  const handleGoToPage = (page) => {
    setPage(page);
  };

  const WrapContainer = (props) => {
    const { children } = props;
    return (
      <div className="flex flex-col items-center justify-center gap-5">
        <div
          className="flex flex-col justify-center gap-5 rounded-2xl
              bg-white p-10 shadow-md"
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
            <div className="flex flex-col gap-10">{children}</div>
          </Transition>
        </div>
      </div>
    );
  };

  switch (page) {
    case 0:
      return (
        <WrapContainer>
          <SignupPage
            title="Sign Up"
            initialValues={initialValues}
            nextPage={handleNextPage}
            goToPage={handleGoToPage}
          />
        </WrapContainer>
      );

    case 1:
      return (
        <WrapContainer>
          <SignupPicturePasswordForm
            title="Sign Up"
            initialValues={initialValues}
            prevPage={handlePrevPage}
            goToPage={handleGoToPage}
          />
        </WrapContainer>
      );

    default:
      break;
  }
}

export default SignupPageContainer;
