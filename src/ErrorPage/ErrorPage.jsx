import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-md">
        
        <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>
        
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Page not found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you are looking for might have been removed or doesn't exist.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;