const BASE_URL = "http://localhost:8080";

export async function loginUser({ email, password }) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Credenciales incorrectas");
  }

  const token = res.headers.get("Authorization");
  console.log("Token:", token);

  if (!token) {
    throw new Error("El servidor no devolvió un token válido");
  }

  return token;
}