function ListTodo() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center justify-between w-[500px] px-4 py-2 border rounded-xl shadow-sm">
        {/* Left side (checkbox + text) */}
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-5 h-5" />
          <p className="text-lg">Sample Todo</p>
        </div>

        {/* Right side (buttons) */}
        <div className="flex items-center gap-4">
          <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Edit
          </button>
          <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600">
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListTodo;
