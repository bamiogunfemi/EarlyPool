import { useState } from "react";
import { Button } from "../../components";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../layouts";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <AuthLayout
      position="left"
      className="text-center"
      title="Reset Password"
      description="A link to reset your password will be sent to your email address">
      <form action="#" method="POST" className="text-primary">
        <fieldset className="mt-[40px] ">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type={"text"}
            placeholder="Email"
            name="email"
            value={email}
            className={"mb-[24px]"}
          />
        </fieldset>
        <Button>Reset Password</Button>
      </form>
    </AuthLayout>
  );
};
export default ResetPassword;
