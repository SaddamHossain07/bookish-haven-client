import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import ReadingBook from "../Pages/ReadingBook/ReadingBook";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'add-book',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: 'all-books',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path: 'books/category/:category_name',
                element: <PrivateRoute><CategoryBooks></CategoryBooks></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bookish-haven-server.vercel.app/books/category/${params.category_name}`)
            },
            {
                path: 'books/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bookish-haven-server.vercel.app/books/${params.id}`)
            },
            {
                path: 'books/update/:id',
                element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bookish-haven-server.vercel.app/books/${params.id}`)
            },
            {
                path: 'books/reading/:id',
                element: <PrivateRoute><ReadingBook></ReadingBook></PrivateRoute>,
                loader: ({ params }) => fetch(`https://bookish-haven-server.vercel.app/books/${params.id}`)
            },
            {
                path: 'borrowed-books',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default Routes;