import type { Book } from "@/types/Book"

interface ComponentProps {
  book: Book
}

const BookListItem = ({book}:ComponentProps) => {
  return(
    <li className="flex justify-between mb-6 mt-6">
      <div className="w-75">
        Title: {book.title} | Rating: {book.avg_rating} <br />
        Author: {book.author} <br />
        Synopsis: {book.synopsis}
      </div>
      <div className="w-25">
        <img src={book.cover_url} alt={book.title} className="w-10 h-15 cover"/>
      </div>
    </li>
  )
}

export default BookListItem;