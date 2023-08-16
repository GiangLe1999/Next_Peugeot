import { FC } from "react";

interface Props {
  showSearch: boolean;
}

const SearchBar: FC<Props> = ({ showSearch }): JSX.Element => {
  return (
    <div
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
      />

      <button className="bg-secondary w-20 h-[46px] rounded-r-md block font-bold text-sm">
        Enter
      </button>
    </div>
  );
};

export default SearchBar;
