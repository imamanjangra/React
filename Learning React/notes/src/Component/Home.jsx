import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      title: "Add Notes",
      desc: "Create new notes with text and images easily.",
      img: "https://via.placeholder.com/150",
      link: "/notes",
      color: "bg-blue-100",
    },
    {
      title: "View Notes",
      desc: "View all your saved notes anytime.",
      img: "https://via.placeholder.com/150",
      link: "/notes",
      color: "bg-green-100",
    },
    {
      title: "About App",
      desc: "Learn more about this amazing Notes App.",
      img: "https://via.placeholder.com/150",
      link: "/about",
      color: "bg-yellow-100",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-500 mb-4 animate-pulse">
          Welcome to NotesApp!
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Manage your notes professionally with ease. Navigate through the app using the features below.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center`}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="mx-auto mb-4 rounded-lg w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700 mb-4">{feature.desc}</p>
            <Link
              to={feature.link}
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Go
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
