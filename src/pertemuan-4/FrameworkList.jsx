import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-8">
      {frameworkData.map((item) => (
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
