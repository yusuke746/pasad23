import React from 'react';

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="font-rubik text-6xl text-primary max-sm:text-4xl text-center">
        ブログページ
      </h1>
      <p className="text-xl mt-4">
        これはサンプルブログページです。
      </p>
      <div className="mt-8 text-left w-2/3">
        <h2 className="text-3xl font-bold mb-4">最初のブログ投稿</h2>
        <p className="text-lg">
          ここにブログのコンテンツが入ります。これは、新しいブログページがどのように表示されるかを示すための単なる例です。
          後で実際のブログ投稿でこれを更新できます。
        </p>
      </div>
    </div>
  );
};

export default BlogPage;