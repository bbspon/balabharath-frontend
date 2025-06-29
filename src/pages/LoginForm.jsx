import React from "react";

const LoginForm = ({
  formData,
  handleChange,
  handleSubmit,
  showPassword,
  setShowPassword,
  errors,
  submitting,
}) => (
  <form onSubmit={handleSubmit} noValidate>
    <label style={{ color: "white" }}>Email or Phone</label>
    <input
      type="text"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="form-control mb-2"
    />
    {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

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

    <button
      type="submit"
      disabled={submitting}
      className="btn btn-warning w-100 mt-2"
    >
      {submitting ? "Logging in..." : "Login"}
    </button>
  </form>
);

export default LoginForm;
