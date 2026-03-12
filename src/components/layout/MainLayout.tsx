import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="site-shell">
      <Header />
      <main className="main-wrap">
        <div className="container">
          <div className="route-enter" key={location.pathname}>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
