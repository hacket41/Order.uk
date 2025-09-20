// src/components/Layout/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SiteFooter from "../SiteFooter"; // Make sure the import path matches your file structure

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar will appear on every page */}
      <Navbar />

      {/* This is where the page content will be rendered */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer will appear on every page */}
      <SiteFooter />
    </div>
  );
};

export default Layout;
