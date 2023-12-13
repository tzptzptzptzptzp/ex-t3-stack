import React from "react";

const DetailBlog: React.FC = () => {
  const handleDelete = () => {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="mx-auto mt-10 w-full max-w-2xl rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-4 text-3xl font-bold">Detail Page</h1>
        <div className="mb-8 text-sm text-gray-500">
          <span>Detail Page</span>
          {/* Created Atが必要ならば、表示 */}
        </div>
        <p className="whitespace-pre-line text-gray-700">Detail Page</p>
        <button
          className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </main>
  );
};

export default DetailBlog;
