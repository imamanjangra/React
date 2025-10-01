function Notes() {
  const sampleNotes = [
    "Learn React Router",
    "Practice Tailwind CSS",
    "Build Notes App",
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Your Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleNotes.map((note, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
            <p className="text-gray-800 font-medium">{note}</p>
            <div className="mt-4 flex justify-end">
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
