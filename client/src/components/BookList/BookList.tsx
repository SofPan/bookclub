import type { Book } from "@/types/Book"
import BookListItem from "./BookListItem"

interface ComponentProps {
  bookData: Book[]
}

const BookList = ({bookData}:ComponentProps) => {
  
  const mapBooks = bookData.map((book:Book) => {
      return <BookListItem
        key={book.id}
        book={book}
      />
    })
  
  return(
    <ul>
      {mapBooks}
    </ul>
  )
}

export default BookList;