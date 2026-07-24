import PostCard from '../postCard/PostCard';

export default function PostGrid({ posts }) {
  if (posts.length === 0) {
    return (
      <p className="mx-auto max-w-6xl px-8 pb-24 text-[#5a5147]">
        Todavía no hay publicaciones en esta categoría.
      </p>
    );
  }
 
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-8 pb-24 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}