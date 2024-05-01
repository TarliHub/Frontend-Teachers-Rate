import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Tasks } from "./pages/Tasks";
import { Profile } from "./pages/Profile";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />} path={ROUTES.MAIN} />
                <Route element={<Tasks />} path={ROUTES.TASKS} />
                <Route element={<Profile />} path={ROUTES.PROFILE} />
                <Route element={<Login />} path={ROUTES.LOGIN} />
                <Route element={<Registration />} path={ROUTES.REGISTRATION} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
