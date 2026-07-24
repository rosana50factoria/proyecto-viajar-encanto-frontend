import PostCard from "../postCard/PostCard";

export default function PostGrid({ posts }) {
  if (posts.length === 0) {
    return (
      <p className="mx-auto max-w-6xl px-4 pb-16 text-neutral/70 sm:px-8 sm:pb-24">
        Todavía no hay publicaciones en esta categoría.
      </p>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-16 sm:gap-8 sm:px-8 sm:pb-24 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}