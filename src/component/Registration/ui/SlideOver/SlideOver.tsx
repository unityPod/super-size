import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import styles from "./SlideOver.module.css";

interface ISlideOver {
  children: React.ReactNode;
  open: boolean;
  onClose: (openState?: boolean) => void;
  fullScreen?: boolean;
}

const SlideOver = (props: ISlideOver) => {
  const { children, fullScreen, open, onClose } = props;
  const handleClose = () => onClose(false);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[200] overflow-y-auto"
        onClose={handleClose}
      >
        <div
          className="flex items-center justify-center h-full overflow-hidden text-center"
          aria-label="dialog"
        >
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-200"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div
              className={clsx(
                styles["slideOverContainer"],
                "align-middle transition-all transform bg-white flex justify-center overflow-x-hidden",
                fullScreen && "fixed inset-0"
              )}
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SlideOver;
