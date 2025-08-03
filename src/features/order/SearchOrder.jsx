import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState("");
  return (
    <input
      placeholder="Search order"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
}
export default SearchOrder;
