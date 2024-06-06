import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Home from "../home";
import Dashboard from "../dashboard";
import Analytics from "../dashboard/analytics";
import Card from "../card";
import Login from "../login";
import ParentComp from "../treeStructure/parentComp";

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "analytics",
          element: <Analytics />,
          children: [
            {
              path: "/analytics",
              element: <Card color={"blue"} />,
              children: [{ path: ":slug/:id/:category", element: <Card /> }],
            },
            {
              path: "analytics-card",
              element: <Card />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    // <RouterProvider router={router} />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/card" element={<Card className={"text-bold"} />} />
        <Route path="/card/:id" element={<Card />} />
        <Route
          path="/analytics/analytics-card"
          element={<Card color={"blue"} />}
        />

          <Route path="/login" element={<Login />} />
       
        <Route path="/parent" element={<ParentComp />} />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

// lifecycle
// mounting
// updating
// unmounting

// lifecycle method
// componentdidmount
// componentWillUpdate
// componentShouldUpdate
// componentDidUpdate
// componentWillUnmount
