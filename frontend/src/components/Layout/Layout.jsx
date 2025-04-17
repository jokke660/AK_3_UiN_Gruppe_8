import layoutStyle from "./Layout.module.css";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router";
import { Nav } from "../Nav/Nav";

export const Layout = () => {
  return (
    <div className={layoutStyle.layout}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
