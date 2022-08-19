import { useState } from "react";
import { Button } from "../../components";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../layouts";

const ResetPassword = () => {
  const [info, setInfo] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const { newPassword, confirmPassword } = info;
  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <AuthLayout
      position="left"
      className="text-center"
      title="Reset Password"
      description="Reset your password">
      <form action="#" method="POST" className="text-primary">
        <fieldset className="mt-[40px] ">
          <Input
            onChange={changeHandler}
            type={"password"}
            placeholder="New Password"
            name="newPassword"
            value={newPassword}
            className={"mb-[24px]"}
          />{" "}
          <Input
            type={"password"}
            placeholder="Confirm Password"
            className={"mb-[32px]"}
            onChange={changeHandler}
            name="confirmPassword"
            value={confirmPassword}
          />{" "}
        </fieldset>
        <Button>Reset Password</Button>
      </form>
    </AuthLayout>
  );
};
export default ResetPassword;
