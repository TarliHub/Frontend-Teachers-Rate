import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Tasks } from "./pages/Tasks";
import { Profile } from "./pages/Profile";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Teachers } from "./pages/Teachers";
import { CreateUser } from "./components/CreateUser/CreateUser";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <NavigationBar role="Admin" />
            <Routes>
                <Route element={<Main />} path={ROUTES.MAIN} />
                <Route element={<Tasks />} path={ROUTES.TASKS} />
                <Route element={<Profile />} path={ROUTES.PROFILE} />
                <Route element={<Login />} path={ROUTES.LOGIN} />
                <Route element={<Teachers />} path={ROUTES.TEACHERS} />
                <Route
                    path={`${ROUTES.TEACHERS}/create-user`}
                    element={<CreateUser />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
