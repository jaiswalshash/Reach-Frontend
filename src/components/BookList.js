import React, { useEffect, useRef } from "react";
import "./booklist.css";

function truncateDescription(description, maxLength) {
  if (description.length <= maxLength) {
    return description;
  }

  // Find the nearest full stop within the specified length
  const truncatedText = description.substring(0, maxLength + 1);
  const lastSpaceIndex = truncatedText.lastIndexOf(' ');
  const finalDescription = truncatedText.substring(0, lastSpaceIndex).trim();

  return `${finalDescription}...`;
}

function BookList({ enableList, bestMatch }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        enableList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enableList]);

  const handleClose = () => {
    enableList(false);
  };

  const truncatedDescription = truncateDescription(bestMatch.description, 700);
  const truncatedRating = bestMatch.rating.toFixed(1);

  const handleSearch = () => {
    const searchQuery = `https://www.google.com/search?q=${encodeURIComponent(bestMatch.title)}`;
    window.open(searchQuery, '_blank');
  };

  return (
    <div ref={dialogRef} style={{ zIndex: 82 }} id="booklist" className="fixed w-[70%] h-[70%] bg-opacity-17 rounded-lg bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] shadow-md backdrop-filter backdrop-blur-md border-opacity-45 px-16 py-7">
      <h1 id="heading" className="w-full flex justify-center text-4xl mb-7 items-center text-gray-600 font-palanquin dark:text-white">
        <span className="text-pink-400">Voila! </span>
        Here is your perfect match! 🥳
      </h1>
      <div id="content" className="flex gap-5 text-black dark:text-white h-fit">
        <img src={bestMatch.coverImage} style={{ width: 128, height: 208, objectFit: 'cover' }} alt="book-cover" />
        <div id="book-content" className="flex flex-col gap-5 font-montesrrat text-[0.9rem]">
          <div>
            <span className="font-bold">Title: {bestMatch.title}</span>
          </div>
          <div>
            <span className="font-bold">Author:</span> {bestMatch.author}
          </div>
          <div>
            <span className="font-bold">Rating:</span> {truncatedRating}
          </div>
          <div>
            <span className="font-bold">Description: </span>
            {truncatedDescription}
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-10">
        <button className="border mt-4 p-2 w-[5rem] bg-purple-400 rounded-lg shadow-lg hover:translate-y-[-2px] transition-transform duration-300 text-black dark:text-white " onClick={handleSearch}>Try It!</button>
        <button className="border mt-4 p-2 w-[5rem] bg-pink-400 rounded-lg shadow-lg hover:translate-y-[-2px] transition-transform duration-300 text-black dark:text-white " onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default BookList;
