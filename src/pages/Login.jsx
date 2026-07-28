import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";
import AuthCard from "../components/common/AuthCard";
import { useLogin } from "../hooks/useLogin";

export default function Login() {

  const { form, error, loading, handleChange, handleSubmit } = useLogin();

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