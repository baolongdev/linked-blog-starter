import React from "react";
import Author from "../../interfaces/author";
import Backlinks from "../misc/backlinks";
import PostBody from "./post-body";
import PostMeta from "./post-meta";

type Props = {
  title: string;
  content: string;
  date?: string;
  author?: Author;
  banner?: string
  banner_y?: string;
  tags?: string[];
  backlinks: {
    [k: string]: {
      title: string;
      excerpt: string;
    };
  };
};

function PostSingle({
  title,
  date,
  author,
  content,
  backlinks,
  banner,
  banner_y,
  tags
}: Props) {  
  return (
    <div className="mx-auto mb-10 max-w-3xl">
      <article>
        <div className="max-h-[300px] overflow-hidden">
          <img src={banner} className="" style={{ transform: `translateY(-${parseFloat(banner_y) * 100}%)` }} alt=""/>
        </div>
        {/* Article header */}
        <header className="mb-10 pt-0">
          {/* Title */}
          <h1 className="h1 text-center mb-4 text-6xl">{title}</h1>
          <div className="gap-2 flex">
            {tags?.map((tag, index)=>(
              <p key={index} className="hover:bg-blue-400 select-none cursor-pointer w-fit rounded-md bg-blue-500 text-white text-sm font-medium px-3 py-2 shadow-sm">{tag}</p>
            ))}
          </div>
        </header>
        {/* Article content */}
        <div>
          {/* Article meta */}
          {(author || date) && (
            <>
              <PostMeta author={author} date={date} />
              <hr className="w-16 h-px pt-px bg-gray-200 border-0 my-6" />
            </>
          )}

          {/* Article body */}
          <PostBody content={content} />
        </div>

        {/* Article footer */}
      </article>

      {/* Backlinks */}
      {(Object.keys(backlinks).length > 0) && (
        <div>
          <hr className="my-8 border border-dashed lg:block" />
          <h3 className="h3 mb-4">
            Backlinks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Backlinks backlinks={backlinks} />
          </div>
        </div>
      )}
      {/* End of Backlinks */}
    </div>
  );
}

export default PostSingle;
