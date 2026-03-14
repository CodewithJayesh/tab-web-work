import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../../theme/useTheme";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div className="site-shell" data-theme={theme}>
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
