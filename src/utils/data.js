import DashboardIcon from "../assets/images/dashboard-icon.svg";
import SavedIcon from "../assets/images/saved-icon.svg";
import ApplicationsIcon from "../assets/images/application-icon.svg";
import LogoutIcon from "../assets/images/logout-icon.svg";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export const navItems = [
  {
    name: "Dashboard",
    link: "/students/dashboard",
    icon: DashboardIcon,
  },
  {
    name: "Saved ",
    link: "/students/saved",
    icon: SavedIcon,
  },
  {
    name: "Applications",
    link: "/students/applications",
    icon: ApplicationsIcon,
  },
  {
    name: "Logout",
    onClick: () => {
      signOut(auth);
      window.location.href = "/login";
    },
    link: "/login",
    icon: LogoutIcon,
  },
];
