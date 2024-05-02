import { Component } from "react";
import kabah from "../assets/kabah.png";
import manasik from "../assets/manasik.svg";
import { Button, Input } from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      email: "",
      password: "",
      refferer: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

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
              Masuk
            </h2>
            <div>
              <h2 className="font-bold text-3xl text-black tracking-wide">
                Selamat Datang,
              </h2>
              <p className="text-sm">Masukan akun untuk melanjutkan.</p>
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
            <Input
              label="Password"
              icon={
                this.state.showPassword ? (
                  <AiFillEye
                    className="cursor-pointer"
                    onClick={this.handleShowPassword}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="cursor-pointer"
                    onClick={this.handleShowPassword}
                  />
                )
              }
              className="text-black"
              required
            />
            <NavLink to={"/forgot-password"} className="self-end">
              <button className="self-end text-red text-xs">
                *Lupa Password?
              </button>
            </NavLink>
            <Button className="bg-black">Masuk</Button>
            <div className="flex gap-2">
              <div className="text-sm leading-6">Baru disini?</div>
              <NavLink to={"/register"}>
                <button className="self-end text-black text-sm font-bold">
                  Daftarkan akun
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
