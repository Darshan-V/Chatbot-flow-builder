import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex flex-col h-screen ${isMobile ? "mobile-layout" : ""}`}
    >
      <div className="bg-gray-800 text-white p-4">Heading Bar</div>
      <div className="flex flex-grow">
        <div
          className={`flex-grow bg-gray-200 p-4 ${
            isMobile ? "mobile-content" : ""
          }`}
        >
          {children}
        </div>
        {!isMobile && (
          <div className="w-64 bg-gray-300 p-4">
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
