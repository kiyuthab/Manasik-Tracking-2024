import { useState } from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


const EditProfile= ({ isOpen, onClose }) => {
  const [imageData, setImageData] = useState("");
  const [imageFile, setImageFile] = useState(null);

    const handleClose = () => {
        onClose();
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageData(reader.result);
          setImageFile(file);
        };
        reader.readAsDataURL(file);
      }
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
          Edit Data
        </h1>
        <p className="text-1xs text-gray-800">
          Ubah detail pengguna
        </p>
        
        <div className="flex flex-col gap-3 pt-9">
            <div className="flex flex-col relative">
                <input className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" type="text" id="name" name="name" placeholder="Nama Lengkap" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 mb-2 pointer-events-none">
                    <FaUser className="text-gray-780" />
                </span>
            </div>
            <div className="flex flex-col relative">
                <input className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" type="text" id="noTelepon" name="noTelepon" placeholder="Nomor Telepon" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 mb-2 pointer-events-none">
                    <IoMdCall className="text-gray-780" />
                </span>
            </div>
            <div className="flex flex-col relative">
                <input className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" type="text" id="alamat" name="alamat" placeholder="Alamat" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 mb-2 pointer-events-none">
                    <FaLocationCrosshairs className="text-gray-780" />
                </span>
            </div>
            <div className="flex flex-col relative">
                <input className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" type="text" id="email" name="email" placeholder="E-mail" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 mb-2 pointer-events-none">
                    <MdOutlineMail className="text-gray-780" />
                </span>
            </div>
            <div className="flex flex-col relative">
              <textarea
                className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 "
                placeholder="Foto Pengguna"
                value={imageData}
                readOnly
              />
              <input
                className="hidden"
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload" className="absolute top-0 right-0 flex items-center justify-center h-full p-2 cursor-pointer">
                <span className="bg-gray-200 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />  
                  </svg>
                </span>
              </label>
            
            </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button className="mr-1 bg-black rounded-full flex-grow" onClick={handleClose}>Simpan</Button>
      </DialogFooter>
    </Dialog>
    )
}

export default EditProfile;