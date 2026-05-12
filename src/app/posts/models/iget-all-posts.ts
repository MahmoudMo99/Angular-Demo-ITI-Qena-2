import { IPosts } from './iposts';

export interface IGetAllPosts {
  posts: IPosts[];
  total: number;
  skip: number;
  limit: number;
}
