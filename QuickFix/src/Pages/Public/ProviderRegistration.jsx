
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import "../../CSS/ProviderRegistration.css";

function ProviderRegistration() {

  const navigate = useNavigate();
  const location = useLocation();

  // Get basic registration information
  const userData = location.state?.userData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // Check user information
  if (!userData) {
    return (
      <div className="provider-register-container">
        <div className="provider-register-box">
          <h2>Please Register First</h2>

          <button onClick={() => navigate("/register")}>
            Go to Register
          </button>
        </div>
      </div>
    );
  }

  // PROVIDER REGISTRATION SUBMIT
  const onSubmit = (data) => {

    const providerData = {
      ...userData,
      ...data,
      role: "SERVICE_PROVIDER",
    };

    // Save provider information
    localStorage.setItem(
      "providerData",
      JSON.stringify(providerData)
    );

    // Save login information
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "SERVICE_PROVIDER");

    alert("Service Provider Registration Completed!");

    // Navigate to Provider Dashboard
    navigate("/provider/dashboard");
  };

  return (
    <div className="provider-register-container">

      <div className="provider-register-box">

        <h1>QuickFix</h1>

        <h2>Service Provider Registration</h2>

        <p className="provider-subtitle">
          Complete your professional service details
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* FULL NAME */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={userData.fullName}
              readOnly
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={userData.phoneNumber}
              readOnly
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={userData.email}
              readOnly
            />
          </div>

          {/* SERVICE CATEGORY */}
          <div className="form-group">
            <label>Service Category</label>

            <select
              {...register("serviceCategory", {
                required: "Please select your service",
              })}
            >
              <option value="">Select Your Service</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="AC Repair">AC Repair</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Painter">Painter</option>
              <option value="Cleaner">Cleaner</option>
            </select>

            {errors.serviceCategory && (
              <p className="error">
                {errors.serviceCategory.message}
              </p>
            )}
          </div>

          {/* EXPERIENCE */}
          <div className="form-group">
            <label>Experience (Years)</label>

            <input
              type="number"
              min="0"
              placeholder="Enter your experience"
              {...register("experience", {
                required: "Experience is required",
                min: {
                  value: 0,
                  message: "Experience cannot be negative",
                },
              })}
            />

            {errors.experience && (
              <p className="error">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* SERVICE PRICE */}
          <div className="form-group">
            <label>Service Price (₹)</label>

            <input
              type="number"
              min="1"
              placeholder="Enter your starting price"
              {...register("price", {
                required: "Service price is required",
                min: {
                  value: 1,
                  message: "Price must be greater than zero",
                },
              })}
            />

            {errors.price && (
              <p className="error">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* WORKING DAYS */}
          <div className="form-group">
            <label>Working Days</label>

            <select
              {...register("workingDays", {
                required: "Please select working days",
              })}
            >
              <option value="">Select Working Days</option>
              <option value="Monday-Friday">Monday - Friday</option>
              <option value="Monday-Saturday">Monday - Saturday</option>
              <option value="Monday-Sunday">Monday - Sunday</option>
              <option value="Flexible">Flexible Days</option>
            </select>

            {errors.workingDays && (
              <p className="error">
                {errors.workingDays.message}
              </p>
            )}
          </div>

          {/* SERVICE AREA */}
          <div className="form-group">
            <label>Service Area</label>

            <input
              type="text"
              placeholder="Enter your service area"
              {...register("serviceArea", {
                required: "Service area is required",
              })}
            />

            {errors.serviceArea && (
              <p className="error">
                {errors.serviceArea.message}
              </p>
            )}
          </div>

          {/* SERVICE DESCRIPTION */}
          <div className="form-group">
            <label>About Your Service</label>

            <textarea
              placeholder="Describe your skills and services"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 20,
                  message: "Enter at least 20 characters",
                },
              })}
            />

            {errors.description && (
              <p className="error">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit">
            Complete Registration
          </button>

        </form>
      </div>
    </div>
  );
}

export default ProviderRegistration;
