import Giscus from "@giscus/react";

function Comments() {
  return (
    <div className="mb-5">
      <Giscus
        id="comments"
        repo="baolongdev/linked-blog-starter-md"
        repoId="R_kgDOKUbfMQ"
        category="General"
        categoryId="DIC_kwDOKUbfMc4CZYPR"
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
