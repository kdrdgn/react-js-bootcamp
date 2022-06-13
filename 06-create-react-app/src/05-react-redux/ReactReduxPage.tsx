import React from "react";
import { Link, Outlet } from "react-router-dom";

export const ReactReduxPage = () => {
    return (
        <div>
            <Link to="/">🏠 Home Page</Link> • Redux
            <hr />
            <ul>
                <li>
                    <Link to="gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="gallery-with-redux">Gallery with Redux</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}   