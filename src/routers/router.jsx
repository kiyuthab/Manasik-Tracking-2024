import { createBrowserRouter } from "react-router-dom";
import { commonPage, privatePage } from "../pages";
// import RequireAuth from "./utils/requireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: commonPage.loginPage,
  },
  {
    path: "/register",
    element: commonPage.registerPage,
  },
  {
    path: "/forgot-password",
    element: commonPage.forgotPassword,
  },
  {
    path: "/dashboard",
    element: privatePage.dashboard,
  },
  {
    path: "/profile",
    element: privatePage.profilePage,
  },
  {
    path: "/jemaah",
    element: privatePage.jemaahPage,
  },
  // {
  //   path: "/",
  //   element: <RequireAuth redirectPath="/" />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: privatePage.dashboard,
  //     },
  //     {
  //       path: "/karyawan",
  //       element: privatePage.employeePage,
  //     },
  //     {
  //       path: "/tugas",
  //       element: privatePage.taskPage,
  //     },
  //     {
  //       path: "/shift-karyawan",
  //       element: privatePage.shiftPage,
  //     },
  //     {
  //       path: "/profil",
  //       element: privatePage.profilPage,
  //     },
  //     {
  //       path: "/detail",
  //       element: privatePage.taskDetail,
  //     },
  //     {
  //       path: "/shift",
  //       element: privatePage.shiftCoor,
  //     },
  //     {
  //       path: "/file",
  //       element: privatePage.filePage,
  //     },
  //     {
  //       path: "/ringkasan",
  //       element: privatePage.summaryPage,
  //     },
  //   ],
  // },
]);

export default router;
