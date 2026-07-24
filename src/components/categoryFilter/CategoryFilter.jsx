

export default function CategoryFilter({ categorias, activa, onSelect }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-8 pb-10">
      {categorias.map((cat) => {
        const isActive = cat === activa;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-[#bfe3f0] text-[#0f3a4a]"
                : "bg-[#e7dccb] text-[#4a4034] hover:bg-[#ddd0ba]"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}