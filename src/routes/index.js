import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/Auth/signup"));
const StudentDahboard = lazy(() => import("../pages/Students/dashboard"));
const SignIn = lazy(() => import("../pages/Auth/signin"));
const ResetPassword = lazy(() => import("../pages/Auth/reset-password"));
const ForgotPassword = lazy(() => import("../pages/Auth/forgot-password"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/students/dashboard" element={<StudentDahboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
