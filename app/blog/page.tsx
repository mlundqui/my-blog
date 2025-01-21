'use client';

import { useState, ChangeEvent } from 'react';

interface BlogPost {
  title: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const newPost: BlogPost = await response.json();
          setPosts((prevPosts) => [newPost, ...prevPosts]);
        } else {
          alert('Failed to upload the file. Please try again.');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <header style={{ backgroundColor: '#4CAF50', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <h1>Welcome to My Blog</h1>
        <p>Upload your content and share your stories!</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <section>
          <h2>Upload a New Blog Post</h2>
          <input type="file" accept=".txt, .docx" onChange={handleFileUpload} />
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Blog Posts</h2>
          {posts.length === 0 ? (
            <p>No posts available. Upload a file to create your first blog post!</p>
          ) : (
            posts.map((post, index) => (
              <article key={index} style={{ marginBottom: '2rem' }}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </article>
            ))
          )}
        </section>
      </main>

      <footer style={{ backgroundColor: '#f4f4f4', color: '#555', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
