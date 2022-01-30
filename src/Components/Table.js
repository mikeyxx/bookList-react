import React from 'react';

const Table = ({books, onDelete}) => {
  return <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.isbn}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.isbn}</td>
                        <td><button onClick={() => onDelete(book.isbn)} className='btn'>X</button></td>
                    </tr>
                )) }
            </tbody>
        </table>;
};

export default Table;
