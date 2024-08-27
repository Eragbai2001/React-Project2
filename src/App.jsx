import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./pages/HomePage";
import History from "./pages/History";
import NotFoundPages from "./pages/NotFoundPages";
import TaskProvider from "./context/TaskContext"; // Ensure this path is correct

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/History" element={<History />} />
        <Route path="*" element={<NotFoundPages />} />
      </Route>
    )
  );

  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
};

export default App;
