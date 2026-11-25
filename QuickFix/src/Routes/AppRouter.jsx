
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ================= PUBLIC =================

import Login from "../Pages/Public/Login";
import Register from "../Pages/Public/Register";
import SelectRole from "../Pages/Public/SelectRole";
import ProviderRegistration from "../Pages/Public/ProviderRegistration";

// ================= LAYOUTS =================

import UserLayout from "../Layout/UserLayout";
import ProviderLayout from "../Layout/ProviderLayout";
import AdminLayout from "../Layout/AdminLayout";

// ================= PROTECTED ROUTE =================

import ProtectedRoute from "./ProtectedRoute";

// ================= USER PAGES =================

import Dashboard from "../Pages/User/Dashboard";
import SearchService from "../Pages/User/SearchService";
import MyBooking from "../Pages/User/MyBooking";
import Message from "../Pages/User/Message";
import Reviews from "../Pages/User/Reviews";
import Profile from "../Pages/User/Profile";
import Setting from "../Pages/User/Setting";
import HelpSupport from "../Pages/User/HelpSupport";

// ================= SERVICE PROVIDER PAGES =================

import ProviderDashboard from "../Pages/ServiceProvider/ProviderDashboard";
import ProviderBookings from "../Pages/ServiceProvider/ProviderBookings";
import ProviderEarnings from "../Pages/ServiceProvider/ProviderEarnings";
import ProviderMessages from "../Pages/ServiceProvider/ProviderMessages";
import ProviderProfile from "../Pages/ServiceProvider/ProviderProfile";
import ProviderSettings from "../Pages/ServiceProvider/ProviderSettings";

// ================= ADMIN PAGES =================

import AdminDashboard from "../Pages/Admin/AdminDashboard";
import ManageUsers from "../Pages/Admin/ManageUsers";
import ManageProviders from "../Pages/Admin/ManageProviders";
import ManageBookings from "../Pages/Admin/ManageBookings";
import ManageServices from "../Pages/Admin/ManageServices";
import AdminMessages from "../Pages/Admin/AdminMessages";
import AdminProfile from "../Pages/Admin/AdminProfile";
import AdminSettings from "../Pages/Admin/AdminSettings";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Role Selection */}
        <Route path="/select-role" element={<SelectRole />} />

        {/* Provider Registration */}
        <Route
          path="/provider-registration"
          element={<ProviderRegistration />}
        />

        {/* ================= USER SECTION ================= */}

        <Route element={<ProtectedRoute allowedRole="USER" />}>
          <Route element={<UserLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/search-services" element={<SearchService />} />

            <Route path="/my-bookings" element={<MyBooking />} />

            <Route path="/messages" element={<Message />} />

            <Route path="/reviews" element={<Reviews />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/settings" element={<Setting />} />

            <Route path="/help-support" element={<HelpSupport />} />

          </Route>
        </Route>

        {/* ================= SERVICE PROVIDER SECTION ================= */}

        <Route element={<ProtectedRoute allowedRole="SERVICE_PROVIDER" />}>
          <Route element={<ProviderLayout />}>

            <Route
              path="/provider/dashboard"
              element={<ProviderDashboard />}
            />

            <Route
              path="/provider/bookings"
              element={<ProviderBookings />}
            />

            <Route
              path="/provider/earnings"
              element={<ProviderEarnings />}
            />

            <Route
              path="/provider/messages"
              element={<ProviderMessages />}
            />

            <Route
              path="/provider/profile"
              element={<ProviderProfile />}
            />

            <Route
              path="/provider/settings"
              element={<ProviderSettings />}
            />

          </Route>
        </Route>

        {/* ================= ADMIN SECTION ================= */}

        <Route element={<ProtectedRoute allowedRole="ADMIN" />}>
          <Route element={<AdminLayout />}>

            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />

            <Route
              path="/admin/users"
              element={<ManageUsers />}
            />

            <Route
              path="/admin/providers"
              element={<ManageProviders />}
            />

            <Route
              path="/admin/bookings"
              element={<ManageBookings />}
            />

            <Route
              path="/admin/services"
              element={<ManageServices />}
            />

            <Route
              path="/admin/messages"
              element={<AdminMessages />}
            />

            <Route
              path="/admin/profile"
              element={<AdminProfile />}
            />

            <Route
              path="/admin/settings"
              element={<AdminSettings />}
            />

          </Route>
        </Route>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* ================= WRONG URL ================= */}

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
