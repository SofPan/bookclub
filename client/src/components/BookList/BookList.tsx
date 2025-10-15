import type { Book } from "@/types/Book"
import BookListItem from "./BookListItem"

interface ComponentProps {
  bookData: Book[],
  hideRender: () => void
}

const BookList = ({bookData, hideRender}:ComponentProps) => {
  const mapBooks = bookData.map((book:Book) => {
      return <BookListItem
        key={book.external_api_id}
        book={book}
        hideRender={hideRender}
      />
    })
  
  return(
    <ul className="absolute">
      {mapBooks}
    </ul>
  )
}

export default BookList;