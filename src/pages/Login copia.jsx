import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";
import AuthCard from "../components/common/AuthCard";

export default function Login() {
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
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Credenciales incorrectas");
      }

      const token = res.headers.get("Authorization");
      console.log(token);
      
      if (!token) {
        throw new Error("El servidor no devolvió un token válido");
      }

      login(token); // guarda en contexto + localStorage
      navigate("/"); // redirige a Home tras login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-14 sm:px-8">
      <AuthCard
        title="Bienvenido de nuevo"
        subtitle="Inicia sesión para seguir compartiendo tus experiencias de viaje."
        footerText="¿Todavía no tienes cuenta?"
        footerLinkText="Regístrate"
        footerLinkTo="/register"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextInput
            id="email"
            label="Correo electrónico"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
          />
          <TextInput
            id="password"
            label="Contraseña"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <Button type="submit" className="mt-2" disabled={loading}>
            {loading ? "Entrando..." : "Iniciar sesión"}
          </Button>
        </form>
      </AuthCard>
    </section>
  );
}