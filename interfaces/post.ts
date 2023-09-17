import type Author from './author'

type PostType = {
  slug: string
  excerpt: string
  title: string
  content: string
  created?: string // time created
  coverImage?: string
  author?: Author
  ogImage?: {
    url: string
  }
}

export default PostType
