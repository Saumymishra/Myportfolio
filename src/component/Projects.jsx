import React, { useEffect, useState } from "react";

export default function Projects({ githubUsername = "Saumymishra" }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos`
        );
        if (!response.ok) throw new Error("Failed to fetch repos");
        const data = await response.json();

        const sortedRepos = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        setRepos(sortedRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [githubUsername]);

  if (loading) return <p className="text-center mt-10">Loading projects...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Error loading projects: {error}
      </p>
    );

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-16 sm:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {repo.name}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              {repo.description || "No description provided."}
            </p>

            <button
              onClick={() => window.open(repo.html_url, "_blank")}
              className="inline-block text-cyan-400 hover:underline font-semibold text-sm sm:text-base"
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
