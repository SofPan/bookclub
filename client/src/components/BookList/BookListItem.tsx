import { cacheBook } from "@/api/bookRequests"
import type { Book } from "@/types/Book"

interface ComponentProps {
  book: Book,
  hideRender: () => void
}

const BookListItem = ({book, hideRender}:ComponentProps) => {

  const cacheAndRender = async () => {
    await cacheBook(book);
    hideRender();
  }

  return(
    <li onClick={cacheAndRender} className="flex justify-between mb-6 mt-6 hover:cursor-pointer">
      <div className="w-75">
        {book.title} | {book.avg_rating | 0} <br />
        {book.author}
      </div>
      <div className="w-25">
        <img src={book.cover_url} alt={book.title} className="w-10 h-15 cover"/>
      </div>
    </li>
  )
}

export default BookListItem;