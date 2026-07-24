import { User } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <img
          src={post.imagen}
          alt={post.titulo}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary sm:left-4 sm:top-4">
          {post.categoria}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="font-serif text-lg font-bold leading-snug text-neutral sm:text-xl">
          {post.titulo}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral/70 sm:mt-3 sm:text-[15px]">
          {post.extracto}
        </p>

        <div className="mt-4 flex items-center gap-3 border-t border-tertiary pt-4 sm:mt-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tertiary/70 text-neutral">
            <User size={16} />
          </span>
          <span className="text-sm font-medium text-neutral">{post.autor}</span>
        </div>
      </div>
    </article>
  );
}