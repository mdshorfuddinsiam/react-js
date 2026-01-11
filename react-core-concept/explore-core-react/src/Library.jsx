import Book from "./Book"
export default function Library({address, books}){
    // console.log(address, books)
    return (
        <div>
            <h2>Bangladesh National Library</h2>
            <p>Address: {address}</p>
            <p>Book Collection: {books.length}</p>
            <ul className="wrapper" >
                {
                    // books.map(book => <li key={book.id}>{book.name}</li>)
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    )
}