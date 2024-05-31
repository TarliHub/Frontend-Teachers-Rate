import "./App.scss";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useContext } from "react";

import { ROUTES } from "./constants/routes";

import { NavigationBar } from "./components/NavigationBar/NavigationBar";

import { AuthContext } from "./context/AuthContext";

import { Login } from "./pages/Login";
import { Tasks } from "./pages/Tasks";
import { Profile } from "./pages/Profile";
import { Teachers } from "./pages/Teachers";
import { CreateUser } from "./pages/CreateUser";
import { UpdateUser } from "./pages/UpdateUser";
import { CentralComision } from "./pages/CentralComision";
import { CreateTask } from "./pages/CreateTask";
import { Category } from "./pages/Category";
import { CreateCategory } from "./pages/CreateCategory";
import { SubmitTask } from "./pages/SubmitTask";
import { OtherProfile } from "./pages/OtherProfile";
import { OtherProfileCH } from "./pages/OtherProfileCH";

function App(): JSX.Element {
    const { token, role } = useContext(AuthContext);

    return (
        <BrowserRouter>
            {token ? (
                <>
                    <NavigationBar role={role} />
                    <Routes>
                        <Route element={<Profile />} path={ROUTES.MAIN} />
                        <Route element={<Tasks />} path={ROUTES.TASKS} />
                        <Route
                            element={<SubmitTask />}
                            path={`${ROUTES.TASKS}/submit/:id`}
                        />
                        {role === 0 && (
                            <>
                                <Route
                                    element={<OtherProfileCH />}
                                    path={`${ROUTES.TEACHERS}/head-teacher/:id`}
                                />
                                <Route
                                    element={<CentralComision />}
                                    path={`${ROUTES.TEACHERS}${ROUTES.CENTRAL_COMISION}/:id`}
                                />
                                <Route
                                    element={<CreateTask />}
                                    path={`${ROUTES.TASKS}/create-task`}
                                />
                                <Route
                                    path={`${ROUTES.TASKS}/update-task/:id`}
                                />
                                <Route
                                    path="/category"
                                    element={<Category />}
                                />
                                <Route
                                    path="/category/create-category"
                                    element={<CreateCategory />}
                                />
                                <Route path="/category/update-category/:id" />
                            </>
                        )}
                        {role !== 2 && (
                            <>
                                <Route
                                    element={<Teachers />}
                                    path={ROUTES.TEACHERS}
                                />
                                <Route
                                    element={<CreateUser />}
                                    path={`${ROUTES.TEACHERS}${ROUTES.CREATE_USER}`}
                                />
                                <Route
                                    element={<OtherProfile />}
                                    path={`${ROUTES.TEACHERS}/teacher/:id`}
                                />

                                <Route
                                    element={<UpdateUser />}
                                    path={`${ROUTES.TEACHERS}${ROUTES.UPDATE_USER}/:id`}
                                />
                            </>
                        )}

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
