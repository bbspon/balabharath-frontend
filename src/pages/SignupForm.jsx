import React from "react";

const SignupForm = ({
  formData,
  handleChange,
  handleSubmit,
  showPassword,
  setShowPassword,
  errors,
  submitting,
}) => (
  <form onSubmit={handleSubmit} noValidate>
    <label style={{ color: "white" }}>Full Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="form-control mb-2"
    />
    {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}

    <label style={{ color: "white" }}>Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="form-control mb-2"
    />
    {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

    <label style={{ color: "white" }}>Phone</label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="form-control mb-2"
    />
    {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}

    <label style={{ color: "white" }}>Password</label>
    <div style={{ position: "relative" }}>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        style={{
          position: "absolute",
          right: 10,
          top: 5,
          border: "none",
          background: "transparent",
          color: "white",
        }}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
    {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}

    <label style={{ color: "white" }}>Confirm Password</label>
    <input
      type={showPassword ? "text" : "password"}
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      className="form-control mb-2"
    />
    {errors.confirmPassword && (
      <div style={{ color: "red" }}>{errors.confirmPassword}</div>
    )}

    <div className="form-check mb-2">
      <input
        type="checkbox"
        className="form-check-input"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={handleChange}
      />
      <label className="form-check-label text-white">
        I accept the{" "}
        <a href="/terms" className="text-info">
          Terms & Conditions
        </a>
      </label>
      {errors.termsAccepted && (
        <div style={{ color: "red" }}>{errors.termsAccepted}</div>
      )}
    </div>

    <button
      type="submit"
      disabled={submitting}
      className="btn btn-warning w-100"
    >
      {submitting ? "Signing up..." : "Signup"}
    </button>
  </form>
);

export default SignupForm;
