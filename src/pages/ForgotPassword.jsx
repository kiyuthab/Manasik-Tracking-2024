import { Button, Input } from "@material-tailwind/react";
import { Component } from "react";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import kabah from "../assets/kabah.png";
import manasik from "../assets/manasik.svg";

export default class ForgotPassword extends Component {
  render() {
    return (
      <div className="h-screen w-full flex">
        <img src={kabah} alt="kabah" className="max-h-screen max-w-full" />
        <div className="flex flex-col gap-5 justify-center w-1/3 m-10">
          <div className="flex gap-1 items-center">
            <img src={manasik} alt="manasik tracking" className="w-14" />
            <h1 className="font-extrabold text-lg tracking-wider text-black">
              Manasik Tracking
            </h1>
          </div>
          <div className="flex flex-col my-5">
            <div>
              <h2 className="font-bold text-3xl text-black tracking-wide">
                Lupa Password
              </h2>
              <p className="text-sm">Masukan email aktif untuk melanjutkan.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              label="Email"
              type="email"
              icon={<MdEmail />}
              className="text-black"
              required
            />
            <Button className="bg-black">Kirim</Button>
            <div className="flex gap-2">
              <NavLink to={"/"}>
                <button className="self-end text-black text-sm font-bold">
                  Kembali
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
