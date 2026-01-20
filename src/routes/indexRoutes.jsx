import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Unauthorized from "../pages/Unauthorized";
import MitraPage from "../pages/MitraPage";
import KlienPage from "../pages/KlienPage";
import LogistikPage from "../pages/LogistikPage";
import TimProyekPage from "../pages/TimProyekPage";
import KaryawanPage from "../pages/KaryawanPage";
import ProyekPage from "../pages/ProyekPage";

export default function AppRoutes() {
    return (
        <Routes>
            {/* redirect root */}
            <Route
                path="/"
                element={
                    <ProtectedRoutes allowRoles={['admin']}>
                        <Navigate to="/dashboard" replace />
                    </ProtectedRoutes>
                }
            />

            {/* public route */}
            <Route
                path="/login"
                element={<Login />}
            />

            {/* 
              Kenapa layout route kayak gini?
                Ini v6 pattern yang benar:

                <Route element={<MainLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                Artinya:
                - MainLayout bukan page
                - Dia wrapper
                - Semua child route render di <Outlet />

                ❌ Anti-pattern:
                '<Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />'
                '<Route path="/employees" element={<MainLayout><Employees /></MainLayout>} />'

                Kelihatannya simpel, tapi nanti:
                - auth guard ribet
                - nested route chaos
                - reusability mati 
            */}
            {/* protected/layout route */}
            <Route element={
                <ProtectedRoutes allowRoles={['admin']}>
                    <MainLayout />
                </ProtectedRoutes>
            }>
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/proyek"
                    element={<ProyekPage />}
                />

                <Route
                    path="/mitra"
                    element={<MitraPage />}
                />

                <Route
                    path="/klien"
                    element={<KlienPage />}
                />

                <Route
                    path="/logistik"
                    element={<LogistikPage />}
                />

                <Route
                    path="/tim-proyek"
                    element={<TimProyekPage />}
                />

                <Route
                    path="/karyawan"
                    element={<KaryawanPage />}
                />
            </Route>

            {/* fallback (optional) */}
            <Route
                path="*"
                element={
                    <Navigate
                        to="/login"
                        replace
                    />
                }
            />

            {/* unauthorized */}
            <Route path="/403" element={<Unauthorized />} />
        </Routes>
    );
}
