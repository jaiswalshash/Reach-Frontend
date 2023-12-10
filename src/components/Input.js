import { React, useState } from "react";
import "./input.css";
import Loader from "./Loader";
import { Select } from "antd";

function Input({ enableList, bestMatch }) {
  const [loader, setLoader] = useState(false);
  const handleSubmit = () => {
    // Check if both mood and personality are not null
    if (mood !== null && personality !== null) {
      // Create a data object with mood and personality
      setLoader(true);
      const data = {
        mood: mood,
        personality: personality,
      };

      fetch("https://reach-harmony-api.onrender.com/match_books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          bestMatch(data.bestMatch);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        })
        .finally(() => {
          setLoader(false);
          enableList(true);
        });
    } else {
      // Handle the case where mood or personality is null
      alert("Mood and personality are required!");
    }
  };

  const moodOptions = [
    { value: 1, label: "Happy" },
    { value: 2, label: "Neutral" },
    { value: 3, label: "Sad" },
    { value: 4, label: "Excited " },
    { value: 5, label: "Stressed" },
    { value: 6, label: "Relaxed" },
    { value: 7, label: "Angry" },
    { value: 8, label: "Confused" },
    { value: 9, label: "Content" },
    { value: 10, label: "Energetic" },
  ];

  // Dummy data for personality options
  const personalityOptions = [
    { value: 1, label: "Sweet" },
    { value: 2, label: "Spicy" },
    { value: 3, label: "Savory" },
    { value: 4, label: "Bitter" },
    { value: 5, label: "Tangy" },
    { value: 6, label: "Umami" },
    { value: 7, label: "Zesty" },
    { value: 8, label: "Minty" },
    { value: 9, label: "Creamy" },
    { value: 10, label: "Fruity" },
  ];

  const [mood, setMood] = useState(null);
  const [personality, setPersonality] = useState(null);

  const handleClear = () => {
    setMood(null);
    setPersonality(null);
  };

  return (
    <div
      id="input-box"
      className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg text-white dark:text-black bg-opacity-40 backdrop-filter backdrop-blur-18 border border-opacity-20 border-white"
    >
      {loader && <Loader />}
      <div
        className="text-pink-500 w-full font-bold flex justify-center items-center sm:text-lg dark:text-pink-200 font-montserrat text-xl leading-8 mt-4
        mb-4"
      >
        Start your Journey with a Single Click!
      </div>
      <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-white">
        How's your mood vibing?
      </label>
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder="Select mood"
        optionFilterProp="label"
        onChange={(value) => setMood(value)}
        options={moodOptions}
        value={mood}
        className="mt-2 shadow-md"
      />
      <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-white">
        What flavor best describes your personality?
      </label>
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder="Select personality"
        optionFilterProp="label"
        onChange={(value) => setPersonality(value)}
        options={personalityOptions}
        value={personality}
        className="mt-2 shadow-md"
      />

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleClear}
          className="border mt-4 p-2 w-[5rem] bg-yellow-400 rounded-lg shadow-lg text-white hover:translate-y-[-2px] transition-transform duration-300"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className="border mt-4 p-2 w-[5rem] bg-purple-400 rounded-lg shadow-lg text-white hover:translate-y-[-2px] transition-transform duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Input;
