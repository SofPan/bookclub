import axios from "axios"

export const queryBooks = async (query: string) => {
  try{
    const data = await axios.get(`http://localhost:5500/api/books/search?q=${query}`)
      .then(res => res.data);
      console.log(data);
      return data;
  } catch (error) {
    return console.error("Error querying books", error);
  }
}