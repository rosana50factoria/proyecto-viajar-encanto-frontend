export default function Header() {
  return (
    <header className="border-b border-[#f0ddd4] bg-[#fdf3ee]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <span className="font-serif text-xl font-bold text-[#b5502e]">
          Viajar con encanto
        </span>
        <nav className="flex items-center gap-8 text-[15px] text-[#2b2b2b]">
          <a href="#" className="border-b-2 border-[#b5502e] pb-1 font-medium text-[#b5502e]">
            Home
          </a>
          <a href="#" className="hover:text-[#b5502e]">Create Post</a>
          <a href="#" className="hover:text-[#b5502e]">Login</a>
          <a href="#" className="hover:text-[#b5502e]">Register</a>
        </nav>
      </div>
    </header>
  );
}