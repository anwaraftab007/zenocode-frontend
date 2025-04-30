import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // If the page is already loaded, trigger the handler immediately
      handlePageLoad();
    } else {
      // Otherwise, wait for the load event
      window.addEventListener("load", handlePageLoad);
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
    <div className="flex flex-col min-w-screen min-h-screen">
     {loading ? (
        <Loader />
      ) : (
        <><Navbar />
      
          <Outlet />
      
      {/* <Footer /> */}
        </>
      )}
    </div>
  );
};

export default Layout;