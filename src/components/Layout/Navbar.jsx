import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerMobile from "../Drawer";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50flex bg-blue-black shadow-md">
        <div className="flex items-center justify-between w-full px-3 bg-deep-blue">
          <h1 className="m-2 font-bold tracking-widest text-black">
            Selamat Datang,
          </h1>
          <div className="hidden md:block">
            <NavLink to={"/profile"}>
              <div className="bg-black h-8 w-8 rounded-full"></div>
            </NavLink>
          </div>

          <button
            onClick={openDrawer}
            className="lg:hidden m-2 bg-gray-200 hover:bg-white active:bg-white transition-all ease-linear duration-150 h-8 rounded-lg flex items-center justify-center gap-2 px-3"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
      <DrawerMobile open={open} closeDrawer={closeDrawer} />
    </>
  );
};

export default NavbarComponent;
