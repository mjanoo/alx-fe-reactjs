import { useParams } from "react-router-dom";

function BlogPost() {
  // Get the dynamic "id" from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post Page</h1>
      <p>Displaying content for blog post with ID: <strong>{id}</strong></p>
    </div>
  );
}

export default BlogPost;
