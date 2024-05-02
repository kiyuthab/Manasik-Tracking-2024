import { useState } from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const UpdatePassword= ({ isOpen, onClose }) => {

  const handleClose = () => {
    onClose();
  };

    return (
        <Dialog
        open={isOpen}
        size="sm"
        className="p-6"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody>
        <IoIosCloseCircleOutline className="cursor-pointer w-9 h-9 float-end text-black" onClick={handleClose} />
          <h1 className="text-black font-bold text-xl tracking-wider mb-2">
            Ubah Password
          </h1>
          <div className="flex flex-col gap-3 pt-9">
              <div className="flex flex-col">
                  <input className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" type="text" id="oldpassword" name="oldpassword" placeholder="Password Lama" />
              </div>
              <div className="flex flex-col">
                  <input className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" type="text" id="newpassword" name="newpassword" placeholder="Password Baru" />
              </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="mr-1 bg-black rounded-full flex-grow" onClick={handleClose}>Simpan</Button>
        </DialogFooter>
      </Dialog>
    )
}

export default UpdatePassword;