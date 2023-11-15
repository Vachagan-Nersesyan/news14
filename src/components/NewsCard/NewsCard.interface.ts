
export interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  publishDate: string;
  comments?: Array<NewsCardPropsCommentsType>
}

export interface NewsCardPropsCommentsType {
  id: number,
  author: AuthorType,
  text: string,
  date: any,
  replay?: Array<NewsCardPropsCommentsType>
}

interface AuthorType {
  id: number
  name: string
  image: string
}
