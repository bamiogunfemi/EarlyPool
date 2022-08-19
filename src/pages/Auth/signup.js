import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/RadioButton";
import { AuthLayout } from "../../layouts";

const SignUp = () => {
  const [info, setInfo] = useState({
    accountType: "student",
    email: "",
    password: "",
  });
  const { accountType, email, password } = info;

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <AuthLayout
      position="right"
      className="text-center"
      title="Sign Up"
      description="Welcome to our community">
      <p className="mb-[16px] text-primary">Account Type</p>
      <form action="#" method="POST" className="text-primary">
        <fieldset className="flex gap-[36px]">
          <RadioButton
            onChange={changeHandler}
            id="1"
            isSelected={accountType === "student"}
            label="Student"
            value="student"
            name="accountType"
          />

          <RadioButton
            onChange={changeHandler}
            id="2"
            isSelected={accountType === "employer"}
            label="Employer"
            value="employer"
            name="accountType"
          />
        </fieldset>
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
        <Button>Create Account</Button>
      </form>
      <div className="text-center m-auto w-[80%] text-primary">
        <p className="mt-[32px]">
          By creating an account, you agree to the Terms & Conditions and the
          Privacy policy
        </p>
        <p className="lg:mt-[76px] mt-[50px]">
          Already have an account?
          <Link to="/login" className="font-semibold">
            {" "}
            Log In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
