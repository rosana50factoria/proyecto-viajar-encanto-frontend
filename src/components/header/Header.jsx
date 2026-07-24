import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-primary/20 bg-tertiary/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        <span className="font-serif text-lg font-bold text-primary sm:text-xl">
          Viajar con encanto
        </span>

        {/* Nav de escritorio */}
        <nav className="hidden items-center gap-8 text-[15px] text-neutral md:flex">
          <a href="/" className="border-b-2 border-primary pb-1 font-medium text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">Create Post</a>
          <a href="#" className="hover:text-primary">Login</a>
          <a href="#" className="hover:text-primary">Register</a>
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
          <a href="/" className="font-medium text-primary">Home</a>
          <a href="#" className="hover:text-primary">Create Post</a>
          <a href="#" className="hover:text-primary">Login</a>
          <a href="#" className="hover:text-primary">Register</a>
        </nav>
      )}
    </header>
  );
}