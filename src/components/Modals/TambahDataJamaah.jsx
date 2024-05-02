import { useState } from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";


const TambahDataJamaah= ({ isOpen, onClose }) => {

  const [selectedOption, setSelectedOption] = useState("");
  
    const handleClose = () => {
        onClose();
    };

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
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
          Tambahkan Data
        </h1>
        <p className="text-1xs text-gray-800">
          Masukan detail pengguna untuk menambah data
        </p>
        
        <div className="flex flex-col gap-3 pt-9">
            <div className="flex flex-col relative">
                <input className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" type="text" id="name" name="name" placeholder="Nama Lengkap" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 mb-2 pointer-events-none">
                    <FaUser className="text-gray-780" />
                </span>
            </div>
            <div className="flex flex-col relative">
              <div className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <select
                  className="w-full text-gray-400" 
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="">Jenis Kelamin</option>
                  <option value="option1">Perempuan</option>
                  <option value="option2">Laki-Laki</option>
                </select>
              </div>
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
                <input className="bg-gray-50 border-2 border-blue text-gray-900 text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" type="password" id="password" name="password" placeholder="Passowrd" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 mt-2 mb-2 pointer-events-none">
                    <MdPassword className="text-gray-780" />
                </span>
            </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button className="mr-1 bg-black rounded-full flex-grow" onClick={handleClose}>Simpan</Button>
      </DialogFooter>
    </Dialog>
    )
}

export default TambahDataJamaah;