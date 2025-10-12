import type { Book } from "@/types/Book"

interface ComponentProps {
  book: Book
}

const BookListItem = ({book}:ComponentProps) => {
  return(
    <li>
      Title: {book.title} | Rating: {book.avg_rating} <br />
      Author: {book.author} <br />
      Synopsis: {book.synopsis}
      <img src={book.cover_url} alt={book.title} />
    </li>
  )
}

export default BookListItem;