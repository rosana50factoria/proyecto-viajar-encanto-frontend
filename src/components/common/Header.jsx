import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-primary pb-1 font-medium text-primary"
      : "hover:text-primary";

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="border-b border-primary/20 bg-tertiary/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        <span className="font-serif text-lg font-bold text-primary sm:text-xl">
          Viajar con encanto
        </span>

        {/* Nav de escritorio */}
        <nav className="hidden items-center gap-8 text-[15px] text-neutral md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          {isAuthenticated && (
            <NavLink to="/create-post" className={navLinkClass}>
              Create Post
            </NavLink>
          )}

          {isAuthenticated ? (
            <>
              <span className="text-neutral/70">
                Hola, {user?.sub || user?.email || "usuario"}
              </span>
              <button onClick={handleLogout} className="hover:text-primary">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
              <NavLink to="/register" className={navLinkClass}>
                Register
              </NavLink>
            </>
          )}
        </nav>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="text-neutral md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav móvil desplegable */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-primary/20 px-4 py-4 text-[15px] text-neutral md:hidden">
          <Link to="/" className="font-medium text-primary" onClick={() => setOpen(false)}>
            Home
          </Link>

          {isAuthenticated && (
            <Link to="/create-post" className="hover:text-primary" onClick={() => setOpen(false)}>
              Create Post
            </Link>
          )}

          {isAuthenticated ? (
            <button onClick={handleLogout} className="text-left hover:text-primary">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-primary" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="hover:text-primary" onClick={() => setOpen(false)}>
                Register
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
