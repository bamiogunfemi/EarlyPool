import { useState } from "react";
import { Button, showError, showSuccess } from "../../components";
import { Input } from "../../components/Input";
import { auth } from "../../firebase";
import { AuthLayout } from "../../layouts";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, loading, error] =
    useSendPasswordResetEmail(auth);

  const onResetPassword = async (e) => {
    e.preventDefault();

    await sendPasswordResetEmail(email);
    showSuccess("Password reset email sent successfully.");
  };
  if (error) return showError(error.message);


  return (
    <AuthLayout
      position="left"
      className="text-center"
      title="Reset Password"
      description="A link to reset your password will be sent to your email address">

      <form onSubmit={onResetPassword} className="text-primary">

        <fieldset className="mt-[40px] ">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type={"text"}
            placeholder="Email"
            name="email"
            required={true}

            value={email}
            className={"mb-[24px]"}
          />
        </fieldset>
        <Button loading={loading} type="submit">
          Reset Password
        </Button>

      </form>
    </AuthLayout>
  );
};
export default ResetPassword;
