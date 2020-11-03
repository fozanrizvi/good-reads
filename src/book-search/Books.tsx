import React from 'react';
import { IBook } from '../shared/Books.model';
import { Book } from './Book';


interface Props {
    books: IBook[],
    onSelectBook: Function
}

export const Books: React.FC<Props> = (props) => {
    const { books, onSelectBook } = props;
    const listItem = books.map(book => <Book onSelectBook={onSelectBook} key={book.id} book={book} />)
    return (
        <div className="books-list">
            <ul>
                {
                    listItem
                }
            </ul>
        </div>
    )

}


