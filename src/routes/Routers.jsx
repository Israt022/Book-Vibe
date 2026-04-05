import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path : '/',
    Component : MainLayout,
    children : [
      {index : true, Component : HomePage},
      {
        path : '/books',
        Component : Books
      }
    ],
    errorElement : <ErrorPage/>
  }
])