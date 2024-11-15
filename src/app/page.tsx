"use client"
import { SetStateAction, useState } from "react";
import { Input } from "@nextui-org/react";
import { data } from "./data";

export default function Home() {
  const [inputId, setInputId] = useState('');
  const [displayedId, setDisplayedId] = useState("");
  const [displayText, setDisplayText] = useState('');
  const [displayTextOriginal, setDisplayTextOriginal] = useState('');
  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputId(event.target.value);
  };

  // Find text by ID
  const handleDisplay = () => {
    // Reset error state initially
    setError("");

    // Check if input is empty
    if (inputId.trim() === "") {
      setError("Input cannot be empty. Please enter a valid number.");
      setDisplayedId("")
      setDisplayText("");
      setDisplayTextOriginal("");
      return;
    }

    // Try to parse the input as a number
    const parsedInputId = parseInt(inputId, 10);
    if (isNaN(parsedInputId)) {
      setError("Invalid input. Please enter a numeric value.");
      setDisplayedId("")
      setDisplayText("");
      setDisplayTextOriginal("");
      return;
    }

    // Validate number range
    if (parsedInputId < 1 || parsedInputId > 100) {
      setError("Please enter a number between 1 and 100.");
      setDisplayedId("")
      setDisplayText("");
      setDisplayTextOriginal("");
      return;
    }

    // Find the item in the data
    const item = data.find((item) => item.id === parsedInputId);
    setDisplayedId(inputId)
    setDisplayText(item ? item.text : "Text not found.");
    setDisplayTextOriginal(item ? item.original : "Text not found.");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleDisplay();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center overflow-y-scroll"
      style={{
        backgroundImage: "url('/hyakunin-issyu.jpg')", // 背景画像を指定
      }}
    >
      {/* 背景の透過レイヤー */}
      <div className="fixed h-full inset-0 bg-black bg-opacity-70"></div>

      <header className={`z-10 w-full text-white text-start px-4 md:px-8 py-4 ${displayText ? "text-2xl md:text-4xl" : "hidden"}`}>
        百人一首JAPAN
      </header>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center relative z-10 w-4/5 mx-auto flex-col gap-y-10 md:gap-y-20 py-10">
        <div className="text-center flex flex-col gap-y-10 md:gap-y-20">
          <div>
            <h1 className={`text-white ${displayText ? "hidden" : "text-5xl md:text-8xl"}`}>百人一首JAPAN</h1>
          </div>
          <div>
            <h2 className="font-bold mb-4 text-white text-2xl md:text-3xl">Enter the number from 1 to 100</h2>
            <Input
              placeholder="Enter ID"
              value={inputId}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="rounded w-24 mx-auto"
            />
            <button
              onClick={handleDisplay}
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Search the translation
            </button>
            {displayText && (
              <>
                <div className="text-start mt-10 text-white">
                  <p className="text-2xl md:text-3xl font-bold">Number: {displayedId}</p>
                </div>
                <div className="text-start mt-10 text-white">
                  <p className="">原文 / Original Text</p>
                  <p className="text-2xl md:text-3xl font-bold">{displayTextOriginal}</p>
                </div>
                <div className="text-start mt-10 text-white">
                  <p>英訳 / English Translation</p>
                  <p className="text-2xl md:text-3xl font-bold">{displayText}</p>
                </div>
              </>
            )}
          </div>
          {error && <p className="text-3xl font-bold text-red-400">ERROR: {error}</p>}
        </div>
      </div>

      <footer className="z-10 w-full bg-gray-800 text-white text-center px-4 py-3 text-sm text-nowrap overflow-x-scroll">
        Reference:{" "}
        Copyright (C) SIG English Lounge All Rights Reserved.
        （
        <a
          href="https://kyomi.sakura.ne.jp/database/h1/h1-e10.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-200 hover:underline text-sm"
        >
          https://kyomi.sakura.ne.jp/database/h1/h1-e10.htm
        </a>
        ）
      </footer>
    </div>
  );
}