import DashboardPage from "./DashboardPage";
import ForgotPassword from "./ForgotPassword";
import JemaahPage from "./JemaahPage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import RegisterPage from "./RegisterPage";

export const commonPage = {
  loginPage: <LoginPage />,
  registerPage: <RegisterPage />,
  forgotPassword: <ForgotPassword />,
};

export const privatePage = {
  dashboard: <DashboardPage />,
  profilePage: <ProfilePage />,
  jemaahPage: <JemaahPage/>
};
