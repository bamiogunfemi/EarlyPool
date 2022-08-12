import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/SignUp"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
