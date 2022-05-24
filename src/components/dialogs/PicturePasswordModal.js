import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { PhotographIcon } from "@heroicons/react/solid";
export default function PicturePasswordModal(props) {
  const { isOpen, closeModal } = props;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-10 text-gray-900
                  flex gap-4 items-center
                  "
                >
                  <PhotographIcon className="w-16 h-16" />
                  ลงชื่อเข้าใช้ด้วยรูปภาพ หรือ รหัสผ่านรูปภาพ
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 leading-6">
                    ลงชื่อเข้าใช้โดยใช้ชื่อผู้ใช้หรืออีเมล
                    พร้อมด้วยรหัสผ่านจากรูปถาพ เมื่อต้องการใช้ตัวเลือกนี้
                    คุณต้องตั้งค่านี้ไว้ก่อนในบัญชีของคุณ
                    <a href="/" className="ml-2 text-primary hover:underline">
                      เรียนรู้วิธีการตั้งค่านี้
                    </a>
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button type="button" className="btn" onClick={closeModal}>
                    ปิด
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
