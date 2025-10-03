function About() {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white rounded-3xl shadow-lg">
      
      <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">
        About NotesApp
      </h2>
      
      <p className="text-gray-800 text-lg mb-4 leading-relaxed">
        Welcome to <span className="font-semibold text-blue-500">NotesApp</span> – a modern, clean, and professional note-taking application built with <span className="font-semibold">React</span> and <span className="font-semibold">React Router</span>.
      </p>

      <p className="text-gray-800 text-lg mb-4 leading-relaxed">
        This app allows you to:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-medium">Add Notes:</span> Create new notes quickly using a simple input form.</li>
        <li><span className="font-medium">View Notes:</span> See all your saved notes in a neat grid layout.</li>
        <li><span className="font-medium">Delete Notes:</span> Remove notes that you no longer need easily.</li>
        <li><span className="font-medium">Note Details:</span> Click on any note to view its full content on a separate page.</li>
        <li><span className="font-medium">Persistent Data:</span> Notes are managed using <span className="font-semibold">React Context</span> and can be extended to use <span className="font-semibold">LocalStorage</span> for keeping notes after reload.</li>
      </ul>

      <p className="text-gray-800 text-lg leading-relaxed">
        The app uses <span className="font-semibold text-blue-500">Tailwind CSS</span> for styling, providing a clean, modern interface with clear typography and structured layouts.
      </p>

      <p className="text-gray-600 text-sm mt-6 text-center">
        Developed by Aman Jangra using React 18 and React Router v6
      </p>
    </div>
  );
}

export default About;
