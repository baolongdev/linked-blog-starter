import Giscus from "@giscus/react";

function Comments() {
  return (
    <div className="mb-5">
      <Giscus
        id="comments"
        repo="baolongdev/linked-blog-starter-md"
        repoId="R_kgDOImOn5w"
        category="Announcements"
        categoryId="DIC_kwDOImOn584CTCQN"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

export default Comments;
