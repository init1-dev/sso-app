import { Navigate, createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import MainPage from "../pages/MainPage";
import ProfileComponent from "../pages/ProfileComponent";

const ROUTES = {
    ROOT: "/",
    MAIN: "sso-login",
    PROFILE: "profile",
    NOT_FOUND: "*"
};

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Navigate to={ROUTES.MAIN} replace />
            },
            {
                path: ROUTES.MAIN,
                element: <MainPage />
            },
            {
                path: ROUTES.PROFILE,
                element: <ProfileComponent />
            },
            {
                path: ROUTES.NOT_FOUND,
                element: <Navigate to={ROUTES.MAIN} replace />
            }
        ]
    }
])

export default router;