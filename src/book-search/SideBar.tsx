import React from 'react';
import { IBook } from '../shared/Books.model';



interface Props {
    selectedBooksList: IBook[],
    onClearBookFromList: Function
}

export const SideBar: React.FC<Props> = (props) => {
    const { selectedBooksList, onClearBookFromList } = props;
    const onBookClear = (id: string) => {
        onClearBookFromList(id);
    }
    const listItems = selectedBooksList.map(book =>
        <li>
            <span>{book.volumeInfo.title}</span>
            <i onClick={() => onBookClear(book.id)}>&times;</i>
        </li>)
    return (
        <aside>
            <h3>My Reading wishlist {selectedBooksList.length}</h3>
            <ul>
                {listItems}
            </ul>

        </aside>
    )
} 