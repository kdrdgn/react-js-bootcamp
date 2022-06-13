import React from "react";
import { Link, Outlet } from "react-router-dom";

export const ReactStylingPage = () => {
    return (
        <div>
            <Link to="/">🏠 Home Page</Link> • Styling
            <hr />
            <ul>
                <li>
                    <Link to="css-file">CSS File</Link>
                </li>
                <li>
                    <Link to="inline">Inline</Link>
                </li>
                <li>
                    <Link to="styled">Styled Component</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}   