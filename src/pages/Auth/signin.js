import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../layouts";

const SignIn = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = info;

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <AuthLayout
      position="left"
      className="text-center"
      title="Welcome"
      description="Login to your account">
      <form action="#" method="POST" className="text-primary">
        <fieldset className="mt-[40px] ">
          <Input
            onChange={changeHandler}
            type={"text"}
            placeholder="Email"
            name="email"
            value={email}
            className={"mb-[24px]"}
          />
          <Input
            type={"password"}
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
            className={"mb-[32px]"}
          />
        </fieldset>
        <Button>Login</Button>
      </form>
      <div className="text-center m-auto w-[80%] text-primary">
        <p className="mt-[76px]">
          No account yet?
          <Link to="/login" className="font-semibold">
            {` `}Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
export default SignIn;
