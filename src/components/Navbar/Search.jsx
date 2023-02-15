import React from 'react'
import { useState } from "react";

const Search = () => {
  const [Search, setSearch] = useState("");
  return (
    <div className="bg-red-300">lookin for
      <input className="bg-red-200" type="text"onChange={(e) => setSearch(e.target.value)}/>
      <button>Search</button>
    </div>
  )
}

export default Search

