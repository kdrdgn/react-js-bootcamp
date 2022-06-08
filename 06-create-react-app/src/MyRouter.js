import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./01-basic-hooks/Counter";
import NotFound from "./04-react-router/NotFound";
import App from "./App";

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}></Route>
                <Route path="counter" element={<Counter/>}>
                    <Route path=":initialCounter" element={<Counter/>}></Route>
                </Route>
                <Route path="*" element={<NotFound/ >}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter;