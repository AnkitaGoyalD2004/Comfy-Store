// import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// const HomeLayout = () => {
//   return (
//     <>
//       <nav>
//         <Header />
//         <Navbar />
//       </nav>

//       <section className="align-element py-20">
//         <Outlet />
//       </section>
//     </>
//   );
// };
// export default HomeLayout;

import { Outlet, useNavigation } from "react-router-dom";
import { NavBar, Loading, Header } from "../Components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header></Header>
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
