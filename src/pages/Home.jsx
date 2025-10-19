import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 flex flex-col justify-center items-center pt-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 flex-grow">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
         Find clarity in your thoughts.✍️
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Write your story one page at a time. Reflect on your journey, release what's heavy, and rediscover the peace within you.
        </p>
        <Link
          to="/journal"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow transition"
        >
          Start Journaling📝
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200 w-full">
        © {new Date().getFullYear()} Personal Journal. Developed By Sakarie Mohamud .
      </footer>
    </div>
  );
}
