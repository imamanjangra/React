function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-3xl font-bold mb-4 text-blue-500 text-center">About NotesApp</h2>
      <p className="text-gray-700 text-lg">
        This is a modern, stylish Notes App built with React and React Router. 
        It allows you to add, view, and delete notes. Data will be stored in LocalStorage to retain notes even after reload.
      </p>
    </div>
  );
}

export default About;
