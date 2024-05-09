import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Tasks } from "./pages/Tasks";
import { Profile } from "./pages/Profile";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Teachers } from "./pages/Teachers";
import { CreateUser } from "./pages/CreateUser";
import { UpdateUser } from "./pages/UpdateUser";

import { useIsLogin } from "./hooks/useIsLogin";

function App(): JSX.Element {
    const isLogin = useIsLogin();

    return (
        <BrowserRouter>
            {isLogin ? (
                <>
                    <NavigationBar role="Admin" />
                    <Routes>
                        <Route element={<Main />} path={ROUTES.MAIN} />
                        <Route element={<Tasks />} path={ROUTES.TASKS} />
                        <Route element={<Profile />} path={ROUTES.PROFILE} />
                        <Route element={<Teachers />} path={ROUTES.TEACHERS} />
                        <Route
                            element={<CreateUser />}
                            path={`${ROUTES.TEACHERS}${ROUTES.CREATE_USER}`}
                        />
                        <Route
                            element={<UpdateUser />}
                            path={`${ROUTES.TEACHERS}${ROUTES.UPDATE_USER}/:id`}
                        />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route element={<Login />} path={ROUTES.LOGIN} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;
