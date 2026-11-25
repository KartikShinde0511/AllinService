
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../CSS/SelectRole.css";

function SelectRole() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get registration information
  const userData = location.state?.userData;

  // Check registration information
  if (!userData) {
    return (
      <div className="role-container">
        <div className="role-box">
          <h2>Please Register First</h2>

          <button onClick={() => navigate("/register")}>
            Go to Register
          </button>
        </div>
      </div>
    );
  }

  // USER ROLE
  const selectUser = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "USER");

    localStorage.setItem(
      "userData",
      JSON.stringify(userData)
    );

    navigate("/dashboard");
  };

  // SERVICE PROVIDER ROLE
  const selectProvider = () => {
    navigate("/provider-registration", {
      state: {
        userData: userData,
      },
    });
  };

  return (
    <div className="role-container">

      <div className="role-box">

        <h1>QuickFix</h1>

        <h2>Choose Your Role</h2>

        <p className="role-subtitle">
          How would you like to use QuickFix?
        </p>

        <div className="role-options">

          {/* USER CARD */}

          <div
            className="role-card"
            onClick={selectUser}
          >

            <div className="role-icon">
              👤
            </div>

            <h3>User</h3>

            <p>
              Find and book trusted home services
              whenever you need them.
            </p>

            <button type="button">
              Continue as User
            </button>

          </div>

          {/* SERVICE PROVIDER CARD */}

          <div
            className="role-card"
            onClick={selectProvider}
          >

            <div className="role-icon">
              🔧
            </div>

            <h3>Service Provider</h3>

            <p>
              Offer your services, manage bookings
              and earn money with QuickFix.
            </p>

            <button type="button">
              Continue as Provider
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SelectRole;
