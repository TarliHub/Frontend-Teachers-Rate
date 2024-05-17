import "./App.scss";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useContext } from "react";

import { ROUTES } from "./constants/routes";

import { NavigationBar } from "./components/NavigationBar/NavigationBar";

import { AuthContext } from "./context/AuthContext";

import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Tasks } from "./pages/Tasks";
import { Profile } from "./pages/Profile";
import { Teachers } from "./pages/Teachers";
import { CreateUser } from "./pages/CreateUser";
import { UpdateUser } from "./pages/UpdateUser";
import { CentralComision } from "./pages/CentralComision";

function App(): JSX.Element {
    const { token, role } = useContext(AuthContext);

    return (
        <BrowserRouter>
            {token ? (
                <>
                    <NavigationBar role={role} />
                    <Routes>
                        <Route element={<Main />} path={ROUTES.MAIN} />
                        <Route element={<Tasks />} path={ROUTES.TASKS} />
                        <Route element={<Profile />} path={ROUTES.PROFILE} />
                        <Route element={<Teachers />} path={ROUTES.TEACHERS} />
                        <Route
                            element={<CreateUser />}
                            path={`${ROUTES.TEACHERS}${ROUTES.CREATE_USER}`}
                        />
                        {role === 0 && (
                            <Route
                                element={<CentralComision />}
                                path={`${ROUTES.TEACHERS}${ROUTES.CENTRAL_COMISION}/:id`}
                            />
                        )}
                        <Route
                            element={<UpdateUser />}
                            path={`${ROUTES.TEACHERS}${ROUTES.UPDATE_USER}/:id`}
                        />
                        <Route
                            path="*"
                            element={<Navigate to={ROUTES.MAIN} />}
                        />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route element={<Login />} path={ROUTES.LOGIN} />
                    <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;
