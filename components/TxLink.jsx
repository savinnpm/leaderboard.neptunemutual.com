import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/outline";

export function TxLink() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="text-blue-500 hover:text-blue-900"
        >
          Tx
        </button>
      </div>

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
              <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-50" />
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
              <div className="inline-block w-full max-w-lg my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-3xl">
                {/* Header with close */}
                <div className="flex justify-between pl-10 pr-6 py-4 bg-[#F1F5F9]">
                  <p className="text-[#64748B]">Bug Report #1234576</p>
                  <button type="button" onClick={closeModal}>
                    <XIcon width={18} height={18} />
                  </button>
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Title */}
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-7"
                  >
                    Cannot Provide Liquidity
                  </Dialog.Title>
                  <p className="text-gray-400 mt-1">
                    Reported On: 1/1/2022 23:12 UTC
                  </p>

                  <div className="mt-6">
                    <p className="leading-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Consequat mauris nunc congue nisi vitae. Metus
                      vulputate eu scelerisque felis imperdiet proin fermentum
                      leo. In tellus integer feugiat scelerisq
                    </p>

                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block leading-8 underline mt-4"
                    >
                      Read more
                    </a>
                  </div>

                  <div className="mt-14">
                    <p>
                      Status:{" "}
                      <span className="inline-block bg-teal-600 text-white px-1 rounded-md">
                        Accepted
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
