// api.js connects to backend
import axios from 'axios';

const baseURL = 'http://localhost:3001';

const api = axios.create({
  baseURL: baseURL
});

export const createPost = async (postName) => {
  try {
    const response = await api.post('/posts', { postName: postName });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while creating the post');
  }
};

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while retrieving posts');
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while deleting the post');
  }
};