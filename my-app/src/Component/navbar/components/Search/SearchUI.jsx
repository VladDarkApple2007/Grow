import React, { useEffect, useMemo, useRef, useState } from "react";
// import "../navbar.css";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../../../../redux/slice/apiSlice";

export default function SearchUI() {
  const { data: data, error, isLoading } = useGetProductQuery();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [stateSearch, setStateSearch] = useState(false);
  const navigate = useNavigate();

  const SearchFilter = useMemo(() => {
    if (!data) return [];
    return data.filter((product) =>
      product?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  const searchRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setStateSearch(false); // закриваємо панельку, а не setSearchTerm(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropDownClose = () => {
    setSearchOpen(!searchOpen);
    setSearchQuery("");
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleToItemCart = (id) => {
    navigate(`/product/${id}`);
    setSearchOpen(!searchOpen);
    setSearchQuery("");
  };
  return (
    <div className="icon_search_nav" ref={searchRef}>
      <div className={`search-container ${searchOpen ? "open" : ""}`}>
        <FaSearch
          className="search-icon"
          onClick={() => setSearchOpen(!searchOpen)}
        />
        {searchOpen && (
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div>
                {SearchFilter.length > 0 && (
                  <ul className="search-dropdown">
                    {SearchFilter.slice(0, 5).map((product) => (
                      <li
                        key={product.id}
                        className="search-item"
                        onClick={() => handleToItemCart(product.id)}
                      >
                        {product.title}
                      </li>
                    ))}
                  </ul>
                )}
                <IoMdClose className="mdclose-icon" onClick={dropDownClose} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
