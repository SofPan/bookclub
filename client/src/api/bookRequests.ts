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

export const cacheBook = async (payload:{}) => {
  try{
    await axios.post(`http://localhost:5500/api/books/`, payload)
      .then(res => console.log("post result", res));
      return;
  } catch (error) {
    return console.error("Error caching book", error);
  }
}