import React from "react";

const BlogPost = ({ title, description, slug }) => {
  return (
    <div className="w-full mb-2">
      <div className="flex flex-col justify-between md:flex-row">
        <a className="decoration-sky-700" href={`/blog/${slug}`}>
          <h4
            className={
              "w-full mb-2 text-4xl lg:text-2xl font-medium text-gray-900  "
            }
          >
            {title}
          </h4>
        </a>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-2xl lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default BlogPost;
