import { Transition } from "@headlessui/react";
import React from "react";

function FormLayout(props) {
  const { children } = props;
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
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
}

export default FormLayout;
