import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, showError } from "../../components";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/RadioButton";
import { AuthLayout } from "../../layouts";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const SignUp = () => {
  const [info, setInfo] = useState({
    accountType: "student",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    companyName: "",
    err: "",
  });
  const {
    accountType,
    email,
    password,
    firstName,
    lastName,
    companyName,
    err,
  } = info;

  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (user) navigate("/students/dashboard");
  }, [user, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    showError("KLLK");
    if (password.length < 6) {
      setInfo({ ...info, err: "Password must be at least 6 characters long" });
      return;
    }
    setLoading(true);
    if (accountType === "student") {
      try {
        await registerWithEmailAndPassword(
          {
            accountType,
            firstName,
            lastName,
          },
          email,
          password
        );

        setLoading(false);
      } catch {
        setLoading(false);
      }
    } else {
      try {
        await registerWithEmailAndPassword(
          {
            companyName,
            accountType,
          },
          email,
          password
        );
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
  };
  return (
    <AuthLayout
      position="right"
      className="text-center"
      title="Sign Up"
      description="Welcome to our community">
      <p className="mb-[16px] text-primary">Account Type</p>
      <form onSubmit={handleSubmit} className="text-primary">
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
          {accountType === "employer" && (
            <Input
              required={true}
              onChange={changeHandler}
              type={"text"}
              placeholder="Company Name"
              name="companyName"
              value={companyName}
              className={"mb-[24px]"}
            />
          )}
          {accountType === "student" && (
            <>
              <Input
                required={true}
                onChange={changeHandler}
                type={"text"}
                placeholder="First Name"
                name="firstName"
                value={firstName}
                className={"mb-[24px]"}
              />
              <Input
                onChange={changeHandler}
                type={"text"}
                required={true}
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                className={"mb-[24px]"}
              />
            </>
          )}

          <Input
            onChange={changeHandler}
            type={"text"}
            placeholder="Email"
            name="email"
            required={true}
            value={email}
            className={"mb-[24px]"}
          />
          <Input
            type={"password"}
            name="password"
            required={true}
            value={password}
            onChange={changeHandler}
            placeholder="Password"
            className={"mb-[32px]"}
          />
          {err && <p className="text-[red] mb-4 text-sm">{err}</p>}
        </fieldset>
        <Button type="submit" loading={loading}>
          Create Account
        </Button>
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
