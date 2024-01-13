import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
  return (
    <>
      <nav>
        <Header />
        <Navbar />
      </nav>

      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
