import React, { useState } from "react";
import DialogModal from "components/DialogModal";
import PicturePasswordModal from "components/dialogs/PicturePasswordModal";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

import { Formik, Form, Field } from "formik";

function PasswordPage(props) {
  const { title, initialValues, prevPage, goToPage } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [pictureOpen, setPictureOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function closePictureModal() {
    setPictureOpen(false);
  }

  function openPictureModal() {
    setPictureOpen(true);
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => alert(values)}
      >
        <Form>
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 items-center justify-start">
              <button
                onClick={prevPage}
                className="rounded-full w-6 h-6 inline-flex justify-center 
                            items-center hover:bg-gray-200 "
              >
                <ArrowNarrowLeftIcon className="w-4 h-4 text-[#aca9a9]" />
              </button>
              <span className="align-middle">
                <h6 className="text-base font-light leading-3">
                  {localStorage.getItem("email")}
                </h6>
              </span>
            </div>
            <h5 className="text-2xl font-semibold">{title}</h5>
            <div
              id="password-form"
              action=""
              className="text-[12px] flex flex-col gap-4"
            >
              <div className="password__textfield">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full h-8 border-b-[1px] border-[#666] bg-transparent 
                              outline-none py-[6px] px-[10px] pl-0"
                  required
                  placeholder="รหัสผ่าน"
                />
              </div>

              <div className="signup__container">
                <a className="text-primary hover:underline" href="/">
                  <span>ลืมรหัสผ่านใช่หรือไม่</span>
                </a>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => goToPage(2)}
                  className={`text-primary bg-transparent inline-flex items-center 
                             hover:underline focus:outline-none `}
                >
                  <span>เปลี่ยนวิธีการลงชื่อเข้าใช้ด้วยรูปภาพ</span>
                </button>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={openPictureModal}
                  className={`text-primary bg-transparent inline-flex items-center 
                             hover:underline focus:outline-none `}
                >
                  <span>ลงชื่อเข้าใช้ด้วยบัญชีอื่น</span>
                </button>
              </div>
            </div>

            <div className="w-full flex justify-end gap-1">
              {/* <button type='button' id="prev-button" className="btn bg-secondary hover:bg-[#666]" onClick={() => console.log('click') }>ย้อนกลับ</button> */}
              <button
                type="submit"
                id="next-button"
                className="btn hover:bg-[#005596] disabled:bg-gray-300"
              >
                ลงชื่อเข้าใช้
              </button>
            </div>
          </div>
        </Form>
      </Formik>

      <DialogModal isOpen={isOpen} closeModal={closeModal} />

      <PicturePasswordModal
        isOpen={pictureOpen}
        closeModal={closePictureModal}
      />
    </>
  );
}

export default PasswordPage;
