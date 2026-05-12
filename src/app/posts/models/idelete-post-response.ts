import { IReaction } from './iposts';

export interface IDeletePostResponse {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReaction;
  views: number;
  userId: number;
  isDeleted: boolean;
  deletedOn: Date;
}
