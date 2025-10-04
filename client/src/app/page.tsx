'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const handleClick = async() => {
    console.log("clicked the button!");
    const reqValues = {
      external_api_id: "TestID1",
      title: "Test Title",
      author: "Test Author",
      cover_url: "test url",
      synopsis: "Love this test!"
    }

    await axios.post("http://localhost:5500/api/books/", reqValues)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Testing Routes!</h1>
        <button onClick={handleClick}>Testing Post Book Route!</button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
