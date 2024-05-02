import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Component } from "react";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import kabah from "../assets/kabah.png";
import manasik from "../assets/manasik.svg";
import { CgPassword } from "react-icons/cg";
import { BsPersonFill } from "react-icons/bs";

export default class RegisterPage extends Component {
  render() {
    return (
      <div className="h-screen w-full flex">
        <img src={kabah} alt="kabah" className="max-h-screen max-w-full" />
        <div className="flex flex-col justify-center w-full md:w-1/3 m-10">
          <div className="flex gap-1 items-center">
            <img src={manasik} alt="manasik tracking" className="w-14" />
            <h1 className="font-extrabold text-lg tracking-wider text-black">
              Manasik Tracking
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-3xl text-black tracking-wide">
              Daftar
            </h2>
            <div>
              <h2 className="font-bold text-3xl text-black tracking-wide">
                Selamat Datang,
              </h2>
              <p className="text-sm">Masukan detail akun untuk mendaftar.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Select label="Asal Instansi" className="text-black" required>
              <Option>LSKK</Option>
            </Select>
            <Input
              label="Nama Lengkap"
              type="text"
              icon={<BsPersonFill />}
              className="text-black"
              required
            />
            <Input
              label="Email"
              type="email"
              icon={<MdEmail />}
              className="text-black"
              required
            />
            <Input
              label="Password"
              type="password"
              icon={<CgPassword />}
              className="text-black"
              required
            />
            <Button className="bg-black">Masuk</Button>
            <div className="flex gap-2">
              <div className="text-sm leading-6">Sudah punya akun?</div>
              <NavLink to={"/"}>
                <button className="self-end text-black text-sm font-bold">
                  Masukan akun
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
