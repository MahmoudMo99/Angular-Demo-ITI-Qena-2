import { environment } from '../../environments/environment.development';

const base_domain = environment.domain;

export const API_URLS = {
  getALlPosts: `${base_domain}posts`,

  // getPostById: `${base_domain}posts/`,

  getPostById: (id: number) => `${base_domain}posts/${id}`,

  addPost: `${base_domain}posts/add`,

  // deletePost: `${base_domain}posts`,

  deletePost: (id: number) => `${base_domain}posts/${id}`,

  login: `${base_domain}auth/login`,
};
