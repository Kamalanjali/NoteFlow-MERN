import React,{useState} from "react";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch, searchResults }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    onSearch();
    setOpen(true);
  };
  return (
    <div className="relative w-60">

    <div className="flex items-center gap-2 relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setOpen(false);
        }}
        placeholder="Search Notes..."
        className="input input-bordered w-60"
        />
      <button
        className="btn btn-primary flex items-center justify-center"
        onClick={handleClick}
        type="button"
        >
        <SearchIcon className="w-5 h-5 text-white" />
      </button>

      {/* Search Results Dropdown */}

      {open && searchResults.length > 0 && (
        <div className="absolute top-full mt-2 w-60 bg-white border border-gray-300 rounded shadow-lg z-10">
          {searchResults.map((result) => (
            <Link
            key={result._id}
            to={`/note/${result._id}`}
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
            >
              {result.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>


  );
};

export default SearchBar;
