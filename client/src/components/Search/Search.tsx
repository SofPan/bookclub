import { useEffect, useState } from "react";

interface Result {
  id: number,
  external_api_id: string,
  title: string,
  author: string,
  cover_url: string,
  synopsis: string,
  avg_rating: number
}

const DUMMY_DATA:Result[] = [
  {
    id: 1,
    external_api_id: "TEST1",
    title: "Test Title 1",
    author: "Test Author 1",
    cover_url: "https://picsum.photos/id/237/200/300",
    synopsis: "Test synopsis 1",
    avg_rating: 4.5
  },
  {
    id: 2,
    external_api_id: "TEST2",
    title: "Test Title 2",
    author: "Test Author 2",
    cover_url: "https://picsum.photos/200/300?grayscale",
    synopsis: "Test synopsis 2",
    avg_rating: 3.25
  },
  {
    id: 3,
    external_api_id: "TEST3",
    title: "Test Title 3",
    author: "Test Author 3",
    cover_url: "https://picsum.photos/200/300/?blur",
    synopsis: "Test synopsis 3",
    avg_rating: 4.5
  },
]

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [typingTimeout, setTypingTimeout] = useState<ReturnType<typeof setTimeout> | undefined>();

  const [render, setRender] = useState(false);  
  
  /*
    Render the results as a list
    When user clicks on a result, for now render it to the side (later will have its own page to add to user list, see reviews, etc)
  */
  useEffect(() => {
    // Once the search query is over 3 characters long, begin debounce sequence
    if (searchText.length > 3){
      (typingTimeout) && clearTimeout(typingTimeout);
  
      const newTimeout = setTimeout(() => {
        setDebouncedQuery(searchText);
      }, 1000);
  
      setTypingTimeout(newTimeout);
    }

    return () => {
      typingTimeout && clearTimeout(typingTimeout);
    };

  }, [searchText]);


  useEffect(() => {
    if (debouncedQuery) {
      // This code will run only after the user stops typing for the specified delay
      setRender(true);
    }

  }, [debouncedQuery])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    return;
  }

  const mapAndFilter = (arr:Result[], searchQuery:string) => {
    return arr.filter((result:Result) => {
      return result.title.toLowerCase().includes(searchQuery.toLowerCase());
    }).map((result:Result) => {
      return <li key={result.id}>
        Title: {result.title} | Rating: {result.avg_rating} <br />
        Author: {result.author} <br />
        Synopsis: {result.synopsis}
        <img src={result.cover_url} alt={result.title} />
      </li>
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input onChange={handleChange} type="text" value={searchText}></input>
      </form>
      <ul>
        {render && mapAndFilter(DUMMY_DATA, debouncedQuery)}
      </ul>
    </div>
  )
}

export default Search;