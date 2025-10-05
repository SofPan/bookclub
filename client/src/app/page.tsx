'use client'
import axios from "axios";

const URL = `http://localhost:5500/api`;
const TEST_ID = 2;

export default function Home() {

  const handlePost = async() => {
    const reqValues = {
      user_id: TEST_ID,
      role: 'member'
    }

    await axios.post(`${URL}/clubs/1/members/`, reqValues)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
  };

  const handlePut = async() => {
      const reqValues = {
        role: 'admin'
      }

      await axios.put(`${URL}/clubs/1/members/${TEST_ID}`, reqValues)
        .then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
    };

  const handleDelete = async() => {
    await axios.delete(`${URL}/clubs/1/members/${TEST_ID}`)
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
        <button className="border border-solid" onClick={handlePost}>Testing Post</button>
        <button className="border border-solid" onClick={handlePut}>Testing Put</button>
        <button className="border border-solid" onClick={handleDelete}>Testing Delete</button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
