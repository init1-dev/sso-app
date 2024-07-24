import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { toTop } from "../utils/functions/functionsModule";
import { Toaster } from "react-hot-toast";

function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        toTop();
    }, [pathname]);
    
    return (
        <>
            <div><Toaster position="top-right" reverseOrder={false} /></div>
            <Outlet />
        </>
    );
}

export default Layout;