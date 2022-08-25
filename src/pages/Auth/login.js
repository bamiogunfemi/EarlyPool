import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, showError } from "../../components";
import { Input } from "../../components/Input";
import { auth } from "../../firebase";
import { AuthLayout } from "../../layouts";

const SignIn = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { email, password } = info;
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) navigate("/students/dashboard");
      setLoading(false);
    } catch (err) {
      showError(err.message);
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      position="left"
      className="text-center"
      title="Welcome"
      description="Login to your account">
      <form onSubmit={onLogin}>
        <fieldset className="mt-[40px] text-primary ">
          <Input
            onChange={changeHandler}
            type={"text"}
            placeholder="Email"
            name="email"
            value={email}
            required={true}
            className={"mb-[24px]"}
          />
          <Input
            type={"password"}
            name="password"
            value={password}
            onChange={changeHandler}
            required={true}
            placeholder="Password"
            className={"mb-[32px]"}
          />
        </fieldset>
        <Button type="submit" loading={loading}>
          Login
        </Button>
      </form>

      <div className="text-center m-auto w-[80%] text-primary">
        <p className="mt-[76px]">
          No account yet?
          <Link to="/register" className="font-semibold">
            {` `}Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
export default SignIn;
