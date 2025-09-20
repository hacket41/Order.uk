// src/router/index.tsx
import React from "react";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Layout from "../detailcomponents/Layout/Layout";
import MenuList from "../detailcomponents/MenuList";
import AboutUsPage from "../pages/AboutPage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import JoinTheFamilyPage from "../pages/JoinTheFamilyPage";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />, // Layout wrapper for all routes
      children: [
        { index: true, element: <HomePage /> }, // Home page at root
        { path: "details", element: <DetailPage /> },
        { path: "jointhefamily", element: <JoinTheFamilyPage /> },
        { path: "about", element: <AboutUsPage /> },
        { path: "menu", element: <MenuList menus={[]} /> },

        {
          path: "*",
          element: (
            <div className="flex items-center justify-center min-h-96">
              <h1 className="text-2xl font-bold text-gray-600">
                404 - Page Not Found
              </h1>
            </div>
          ),
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Router;
