import { React, useState } from "react";
import Input from "../components/Input";
import BookList from "../components/BookList";

function BookMatcher() {
  const [bookList, setBookList] = useState(false);
  const [bestMatch, setBestMatch] = useState(null);
  const handleBook = (e) => {
    setBookList(e);
  };

  const handleBestBook = (e) => {
    setBestMatch(e)
  }
  return (
    <>
      <div className=" dark:hidden fixed flex justify-center items-center w-full max-w-lg">
        <div className="absolute top-[-5-5rem] right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-10.74rem] left-3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <div className="z-8 w-full flex justify-between flex-col lg:flex-row">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-yellow-400 ">
            Dive into a World Tailored Just for You
          </p>
          {/* max-sm:text-[72px] max-sm:leading-[82] */}
          <h1
            id="hero-title"
            className="mt-6 font-palanquin lg:text-7xl 
         dark:text-gray-300 text-5xl"
          >
            <span
              className="xl:whitespace-nowrap
            z-5 relative pr-10
          "
            >
              Discover Your Literary Match
            </span>
            <br />
            <span className="text-purple-400 dark:text-purple-300 inline-block mt-4">
              HARMONY
            </span>{" "}
            PAGES
          </h1>   
          <p
            className="font-montserrat text-gray-400 dark:text-gray-300 text-lg leading-8 mt-6
        mb-14 sm:max-w-sm"
          >
            Unlock the Perfect Book for Your Personality.
          </p>
        </div>
        <Input enableList={handleBook} bestMatch={handleBestBook} />
        {bookList && bestMatch && (
          <div className="bg-[rgba(0,0,0,0.4)] absolute inset-0 z-30 flex justify-center items-center transition-transform duration-500 ease-in-out">
            <BookList enableList={handleBook} bestMatch= {bestMatch} />
          </div>
        )}
      </div>
    </>
  );
}

export default BookMatcher;
