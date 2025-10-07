import React from 'react';
import { useQuery } from 'react-query';

const { data, isLoading, isError, error, refetch } = useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
  cacheTime: 1000 * 60 * 5, // Keep cache for 5 minutes
  staleTime: 1000 * 30, // Data considered fresh for 30 seconds
  refetchOnWindowFocus: true, // Refetch when window refocuses
  keepPreviousData: true, // Keep old data while fetching new
});

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

