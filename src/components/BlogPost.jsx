import React from "react";

const BlogPost = ({ title, description, slug }) => {
  return (
    <div class="w-full mb-8">
      <div class="flex flex-col justify-between md:flex-row">
        <a class="decoration-sky-700" href={`/blog/${slug}`}>
          <h4 class="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl ">
            {title}
          </h4>
        </a>
      </div>
      <p class="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default BlogPost;
