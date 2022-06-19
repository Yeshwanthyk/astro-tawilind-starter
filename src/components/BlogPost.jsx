import React from "react";

const BlogPost = ({ title, description, slug }) => {
  return (
    <a class="w-full" href={`/blog/${slug}`}>
      <div class="w-full mb-8">
        <div class="flex flex-col justify-between md:flex-row">
          <h4 class="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl ">
            {title}
          </h4>
        </div>
        <p class="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </a>
  );
};

export default BlogPost;
