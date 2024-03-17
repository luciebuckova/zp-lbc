import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import UseWindowSize from "../utils/UseWindowSize";
import SideBar from "../components/SideBar";

function AppLayout() {
  const { width } = UseWindowSize();
  const isSmallScreen = width <= 1024;
  return (
    <>
      <SideBar />
      <main className="flex w-full max-w-6xl flex-col justify-between">
        <Header>{isSmallScreen ? <MobileNav /> : <DesktopNav />}</Header>
        <section className="h-full p-8">
          <Outlet />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default AppLayout;
