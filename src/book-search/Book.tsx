import React from 'react';
import { IBook } from '../shared/Books.model';



interface Props {
    book: IBook;
    onSelectBook: Function
}

export const Book: React.FC<Props> = (props) => {
    const { book, onSelectBook } = props;
    const onClickBook = () => {
        onSelectBook(book);
    }
    return (
        <>
            {
                book.volumeInfo !== undefined && <li onClick={onClickBook}>
                    <figure>
                        {book.volumeInfo.imageLinks !== undefined &&
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                        }
                        <figcaption><h3>{book.volumeInfo.title}</h3></figcaption>
                    </figure>
                    <p>
                        {book.volumeInfo.description}
                    </p>
                </li>
            }
        </>

    )
}