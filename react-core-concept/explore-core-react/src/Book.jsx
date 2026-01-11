export default function Book({book}){
    return (
        <li style={{listStyle:"none"}}>Name: {book.name}, Price: {book.price}</li>
    )
}