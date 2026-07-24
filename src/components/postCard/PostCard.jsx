import { User } from "lucide-react";

/* ---------------------------------- PostCard ---------------------------------- */
export default function PostCard({ post }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={post.imagen}
          alt={post.titulo}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#b5502e]">
          {post.categoria}
        </span>
      </div>
 
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold leading-snug text-[#241c18]">
          {post.titulo}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5a5147]">
          {post.extracto}
        </p>
 
        <div className="mt-5 flex items-center gap-3 border-t border-[#efe6dc] pt-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7dccb] text-[#4a4034]">
            <User size={16} />
          </span>
          <span className="text-sm font-medium text-[#241c18]">{post.autor}</span>
        </div>
      </div>
    </article>
  );
}