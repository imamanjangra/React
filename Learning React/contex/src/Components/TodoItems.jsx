function TodoItems() {
  return (
    <>
      <div className="flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition duration-300 bg-white dark:bg-gray-800">
        <input
          type="checkbox"
          className="w-5 h-5 cursor-pointer accent-green-600"
        />

        <input
          type="text"
          className="flex-grow px-2 py-1 border border-transparent focus:border-green-400 rounded-lg outline-none bg-transparent text-gray-800 dark:text-gray-200"
        />

        <button className="w-8 h-8 rounded-lg flex justify-center items-center bg-gray-100 hover:bg-yellow-200 text-yellow-600 dark:bg-gray-700 dark:hover:bg-yellow-600 dark:text-yellow-400 transition duration-300">
          ✏️
        </button>

        <button className="w-8 h-8 rounded-lg flex justify-center items-center bg-gray-100 hover:bg-red-200 text-red-600 dark:bg-gray-700 dark:hover:bg-red-600 dark:text-red-400 transition duration-300">
          ❌
        </button>
      </div>
    </>
  );
}

export default TodoItems;
