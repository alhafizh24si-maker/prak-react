import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  // Mendapatkan semua tag unik dari data framework
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p>{item.details.developer}</p>
          <p>
            {" "}
            <span className="font-bold">Release Year:</span>{" "}
            {item.details.releaseYear}
          </p>
          <p>
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 
                        hover:underline"
            >
              Visit Website
            </a>
          </p>

          {item.tags.map((tag, index) => (
            <span
              key={index} //tanda unique untuk setiap tag
              className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
