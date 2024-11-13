import React from 'react';

const ArticlePage = (props) => {
  return (
    <article
      className="px-4 py-24 bg-gray-50 mx-auto"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
        <div className="pb-6 mb-6 border-b border-gray-200">
          {props.title}
          {props.data}
        </div>
        {props.image}
      </div>

      <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
        {props.content}
      </div>
    </article>
  );
};

export default ArticlePage;
