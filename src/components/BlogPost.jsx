import React from "react";

const BlogPost = ({ title, description, slug }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex flex-col justify-between md:flex-row">
        <a className="decoration-sky-700" href={`/blog/${slug}`}>
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl ">
            {title}
          </h4>
        </a>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default BlogPost;
