import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/userService";

export function useLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const token = await loginUser(form);
      login(token); // guarda en contexto + localStorage
      navigate("/"); // redirige a Home tras login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { form, error, loading, handleChange, handleSubmit };
}