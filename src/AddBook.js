import React, { useState } from "react";
import { gql, useMutation } from '@apollo/client';

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $published: String!) {
    addBook(title: $title, author: $author, published: $published) {
        id
        title
        author
        published
    }
  }
`;

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [addBook, { data }] = useMutation(ADD_BOOK);

    const handleSubmit = e => {
        e.preventDefault();
        addBook({ variables: { title, author, published } });
        setTitle('');
        setAuthor('');
        setPublished('');
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                      type='text'
                      id='title'
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                      type='text'
                      id='author'
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="published">Published:</label>
                    <input
                      type='text'
                      id='published'
                      value={published}
                      onChange={e => setPublished(e.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
            {data && (
                <p>
                    Added book: {data.addBook.title} by {data.addBook.author}, published in {data.addBook.published}
                </p>
            )}
        </div>
    )
}

export default AddBook;