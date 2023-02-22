import React from "react";
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  {
    getBooks {
        id
        title
        author
        published
    }
  }
`;

function BookList() {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) 
     return <p>Loading...</p>;

    if (error) 
     return <p>Error :(</p>;

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {data.getBooks.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author}, published in {book.published}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
