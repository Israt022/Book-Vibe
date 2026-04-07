import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PageCharts from "../components/PageCharts/PageCharts";

export const router = createBrowserRouter([
  {
    path : '/',
    Component : MainLayout,
    children : [
      {index : true, Component : HomePage},
      {
        path : '/books',
        Component : Books
      },
      {
        path : '/bookDetails/:id',
        Component : BookDetails,
        loader : () => fetch('/booksData.json')
      },
      {
        path : '/pageReload',
        Component : PageCharts,
      }
    ],
    errorElement : <ErrorPage/>
  }
])