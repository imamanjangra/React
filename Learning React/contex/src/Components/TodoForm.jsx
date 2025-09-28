function TodoForm() {
  return (
    <>
      <form className="flex w-full max-w-lg shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-800">
        <input
          type="text"
          placeholder="Write Todo..."
          className="flex-grow px-4 py-2 outline-none text-gray-700 placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-400 bg-transparent"
        />

        <button
          type="submit"
          className="px-5 py-2 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
