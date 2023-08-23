"use client";

import { FC, useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { CarType } from "@/types";
import { BiLoaderCircle } from "react-icons/bi";

interface Props {
  showSearch: boolean;
}

const SearchBar: FC<Props> = ({ showSearch }): JSX.Element => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<CarType[]>([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query.length >= 2) {
        setLoading(true);
        fetch(`/api/search?query=${query}`)
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            setResults(data);
          });
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return (
    <form
      style={{
        transform: showSearch ? "scale(1)" : "scale(0)",
        transformOrigin: "390px -10px",
      }}
      className="bg-white w-[400px] shadow-md absolute right-1 -bottom-16 rounded-md flex items-center pr-[1px] transition z-50"
    >
      <input
        type="text"
        className="h-12 rounded-md outline-none border-none text-primary px-2 py-1 flex-1"
        placeholder="Tìm kiếm ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />

      <button
        type="submit"
        className="bg-secondary w-28 h-[46px] px-2 rounded-r-md block font-bold text-sm"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-1">
            <BiLoaderCircle color="white" className="animate-spin" />
            Searching
          </span>
        ) : (
          "Enter"
        )}
      </button>

      {results.length > 0 && (
        <SearchResults results={results} query={query} setQuery={setQuery} />
      )}
    </form>
  );
};

export default SearchBar;
