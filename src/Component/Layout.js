import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux"
import configureStore from "../Redux/Store/createstore";

function Layout() {
    return ( 
        <Fragment>
            <Provider store={configureStore()}>
            <NavBar/>
            <Outlet/>
            </Provider>
        </Fragment>
     );
}

export default Layout;