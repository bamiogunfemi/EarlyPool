import { NavDash } from "../components/NavBar/nav-dash";
import { navItems } from "../utils/data";
import Notification from "../assets/images/notification.svg";
import Memoji from "../assets/images/memji.svg";
import React, { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { showError } from "../components";
import { Spinner } from "../components/Spinner";
export const AdminLayout = ({ children, title }) => {
  const [user, loading, error] = useAuthState(auth);
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const u = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(u);
      const data = doc.docs[0].data();
      setCurrentUser(data);
    } catch (err) {
      showError(err.message);
    }
  };
  useEffect(() => {
    if (!user && !!loading) return navigate("/login");
    user && fetchUserName();
    showError(error);
  }, [user, error]);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spinner size={100} color="#47236C" />
      </div>
    );
  }
  return (
    <main className="flex">
      <h3 className="flex md:hidden h-screen font-semibold items-center justify-center w-screen text-center">
        Ooops this is a mobile only site
      </h3>
      <NavDash navItems={navItems} />
      <div className="p-[58px] w-full lg:block hidden ">
        <div className="mb-[54px] flex justify-between">
          <div className="font-semibold text-[24px]">{title}</div>
          <div className="flex items-center gap-[31px]">
            <img
              src={Notification}
              alt="notification"
              className="w-[26px] h-[32px]"
            />
            <div className="w-[44px] h-[47px] rounded-full flex justify-center items-center border border-primary  bg-[#D9D9D9]">
              <img
                src={Memoji}
                alt="notification"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};
