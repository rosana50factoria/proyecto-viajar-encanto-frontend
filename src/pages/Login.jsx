import { useState } from "react";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";
import AuthCard from "../components/common/AuthCard";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar con el endpoint de login del backend
    console.log(form);
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
            value={form.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
          />
          <TextInput
            id="password"
            label="Contraseña"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          <Button type="submit" className="mt-2">
            Iniciar sesión
          </Button>
        </form>
      </AuthCard>
    </section>
  );
}