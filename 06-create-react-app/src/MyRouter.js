import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./01-basic-hooks/Counter";
import CounterUseEffect from "./01-basic-hooks/CounterUseEffect";
import { ThemeContext } from "./02-advance-hooks/ThemeContext";
import Todo from "./02-custom-hooks/Todo";
import NotFound from "./03-react-router/NotFound";
import { FileCSSComponent } from "./04-react-syling/FileCSSComponent";
import { InlineCSSComponent } from "./04-react-syling/InlineCSSComponent";
import { ReactStylingPage } from "./04-react-syling/ReactStylingPage";
import { StyledCSSComponent } from "./04-react-syling/StyledCSSComponent";
import { Gallery } from "./05-react-redux/01-gallery";
import { ReactReduxPage } from "./05-react-redux/ReactReduxPage";
import Home from "./Home";

const MyRouter = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={`MyTinyWeb ${darkMode ? "bg-dark" : "bg-light"}`}>
            <p>My tiny website</p>
            <hr />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="counter" element={<CounterUseEffect />}>
                        <Route path=":initialCounter" element={<Counter />}></Route>
                    </Route>
                    <Route path="todo" element={<Todo />}></Route>

                    <Route path="styling" element={<ReactStylingPage />}>
                        <Route path="css-file" element={<FileCSSComponent />} />
                        <Route path="inline" element={<InlineCSSComponent />} />
                        <Route path="styled" element={<StyledCSSComponent />} />
                    </Route>

                    <Route path="redux" element={<ReactReduxPage />}>
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="gallery-with-redux" element={<NotFound />} />
                    </Route>

                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MyRouter;