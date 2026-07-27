import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/common/AuthCard";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || "No se pudo completar el registro");
      }

      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-14 sm:px-8">
    <AuthCard title="Crear cuenta">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          id="name"
          label="Nombre"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextInput
          id="email"
          label="Correo electrónico"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextInput
          id="password"
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Registrarse"}
        </Button>
      </form>
    </AuthCard>
    </section>
  );
};

export default Register;