import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AdminLayout } from "../../layouts";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <AdminLayout
      className="text-center"
      title={
        <>
          <p>Hello, {currentUser?.firstName}</p>
          <p> Welcome back,</p>
        </>
      }>
      content
    </AdminLayout>
  );
};
export default Dashboard;
