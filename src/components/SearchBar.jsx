import { Search, X } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  onClear,
}) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search movies..."
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          py-3
          pl-10
          pr-10
          outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
        "
      />

      {value && (
        <button
          onClick={onClear}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-gray-500
            hover:text-black
            cursor-pointer
          "
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}