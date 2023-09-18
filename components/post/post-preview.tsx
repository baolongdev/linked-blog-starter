import Link from "next/link"
import type Author from '../../interfaces/author'
import PostMeta from "./post-meta"

type Props = {
  title: string
  date?: string
  excerpt: string
  author?: Author
  banner?: string
  slug: string
}

function extractContentFromDoubleBrackets(input) {
  const match = input.match(/\!\[\[(.*?)\]\]/);
  if (match && match[1]) {
    return match[1];
  }
  return input; // Trả về chuỗi ban đầu nếu không có sự trùng khớp
}

const PostPreview = ({
  title,
  date,
  excerpt,
  author,
  slug,
  banner
}: Props) => {   
  return (
    <article className="flex items-center py-4 border-b border-gray-200 justify-between w-full">
      <div className="max-w-[300px] overflow-hidden pr-8">
          <img src={banner} alt=""/>
      </div>
      <div>
        <header>
          <h2 className="h4 mb-2">
            <Link as={`/${slug}`} href="/[...slug]" className="hover:underline">{title}</Link>
          </h2>
        </header>
        <div className="text-lg text-gray-600 mb-4 text-ellipsis">
          {excerpt.slice(0, 500)}
        </div>
        <footer className="text-sm">
          <PostMeta date={date} author={author} />
        </footer>
      </div>
      <Link as={`/${slug}`} href="/[...slug]" className="block shrink-0 ml-6">
        <span className="sr-only">Read more</span>
        <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
        </svg>
      </Link>
    </article>
  )
}

export default PostPreview;