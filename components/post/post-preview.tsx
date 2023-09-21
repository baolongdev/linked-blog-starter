import Link from "next/link"
import type Author from '../../interfaces/author'
import PostMeta from "./post-meta"
import DateFormatter from "../misc/date-formatter"

type Props = {
  title: string
  date?: string
  excerpt: string
  author?: Author
  banner?: string
  tags?: string[]
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  author,
  slug,
  banner,
  tags
}: Props) => {
  return (
    <article className="flex flex-col-reverse md:flex-row border-b border-gray-300 py-12">
      {/* data and author */}
      <div className="text-muted text-sm md:text-base flex flex-row-reverse justify-end items-center gap-2 sm:flex-col sm:items-start sm:justify-start">
        <div className="gap-2 flex pb-2">
          {tags?.map((tag, index)=>(
            <p key={index} className="hover:bg-blue-400 select-none cursor-pointer w-fit rounded-md bg-blue-500 text-white text-sm font-medium px-2 py-2 shadow-sm">{tag}</p>
          ))}
        </div>
        {!(date) ? null : (
          <span>{<DateFormatter dateString={date} />}</span>
        )}
        {!(author) ? null : (
          <div className="flex shrink-0 mr-3">
            <div className="flex items-center gap-1.5 text-normal font-medium">
              <img className="rounded-full" src={author.picture} width="32" height="32" alt="Author 04" />
              <a className="font-medium hover:underline cursor-pointer">{author.name}</a>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="md:basis-3/4 md:ml-auto">
          <div className="max-w-3xl">
            <Link as={`/${slug}`} href="/[...slug]">
              <img src={banner} className="object-cover aspect-[16/9] mt-0 mb-8 border border-gray-800 rounded-xl sm:rounded-3xl"/>
            </Link>
            <div className="text-2xl sm:text-3xl font-medium leading-tight mb-1">
              <Link as={`/${slug}`} href="/[...slug]" className="hover:underline">{title}</Link>
            </div>
            <div className="py-4 typeset">
              {excerpt.slice(0, 200)}
            </div>
            <Link as={`/${slug}`} href="/[...slug]" className="hidden sm:block leading-tight w-fit mb-1 hover:underline">Read more →</Link>
          </div>
      </div>
    </article>
  )
}

export default PostPreview;

