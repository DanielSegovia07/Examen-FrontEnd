import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Crud: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostTitle, setNewPostTitle] = useState<string>('');
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [nextId, setNextId] = useState<number>(101);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          const postsWithIds = data.map((post: any, index: number) => ({
            ...post,
            id: index + 1,
          }));
          setPosts(postsWithIds);
        })
        .catch((error) => console.error('Error al obtener los posts:', error));
    }
  }, []);

  const handleAddPost = () => {
    if (!newPostTitle.trim()) return;

    const newPost: Post = {
      id: nextId,
      title: newPostTitle,
      body: 'Nuevo post',
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setNewPostTitle('');
    setNextId(nextId + 1);

    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post agregado:', data);
      })
      .catch((error) => console.error('Error al agregar el post:', error));
  };

  const handleDeletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Post con id ${id} eliminado`);
        } else {
          console.error(`Error al eliminar el post con id ${id}`);
        }
      })
      .catch((error) => console.error('Error al eliminar el post:', error));
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setNewPostTitle(post.title);
    window.scrollTo(0,1)
  
  };

  const handleUpdatePost = () => {
    if (!newPostTitle.trim() || !editingPost) return;

    const updatedPost: Post = {
      ...editingPost,
      title: newPostTitle,
      body: 'Post actualizado',
    };

    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setEditingPost(null);
    setNewPostTitle('');

    fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: updatedPost.title,
        body: updatedPost.body,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post actualizado:', data);
      })
      .catch((error) => console.error('Error al actualizar el post:', error));
  };

  return (
    <div className="container mt-4">
      <h2>Posts</h2>
      <div className="mb-3">
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          className="form-control"
          placeholder="Título del post"
        />
      </div>
      <div className="mb-3">
        {editingPost ? (
          <>
            <button onClick={handleUpdatePost} className="btn btn-success">
              Actualizar Post
            </button>
            <button
              onClick={() => {
                setEditingPost(null);
                setNewPostTitle('');
              }}
              className="btn btn-secondary ms-2"
            >
              Cancelar
            </button>
          </>
        ) : (
          <button onClick={handleAddPost} className="btn btn-primary">
            Agregar Post
          </button>
        )}
      </div>
      <ul className="list-group">
        {posts.map((post) => (
          <li
            key={post.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {post.title}
            <div>
              <button
                onClick={() => handleEditPost(post)}
                className="btn btn-success btn-sm me-2"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="btn btn-danger btn-sm"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
