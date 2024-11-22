const API_URL = 'http://localhost:5000/api';

export async function getPosts() {
  try {
    const response = await fetch(`${API_URL}/posts/all`, {
      next: { revalidate: 60 }, // Revalidate cache every 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPost(id: string) {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        next: { revalidate: 60 },
      });
  
      return response.json();
    } catch (error) {
      console.error("Error fetching post:", error);
      throw error;
    }
  }