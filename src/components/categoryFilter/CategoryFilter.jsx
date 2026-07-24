

export default function CategoryFilter({ categorias, activa, onSelect }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-8 sm:gap-3 sm:px-8 sm:pb-10">
      {categorias.map((cat) => {
        const isActive = cat === activa;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors sm:px-5 sm:py-2 ${
              isActive
                ? "bg-secondary/25 text-secondary"
                : "bg-tertiary/60 text-neutral hover:bg-tertiary"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}