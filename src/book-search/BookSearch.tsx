import React, { ChangeEvent, ReactEventHandler, useEffect, useState } from "react";
import { IBook } from "../shared/Books.model";
import { debounce } from "../shared/debounce";
import { getBooksByType } from "./book-search.service";
import { Books } from "./Books";
import { SideBar } from "./SideBar";


const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState([]);
    const [selectedBooksList, setSelectedBooksList] = useState([] as IBook[]);

    async function requestBooks() {
        if (bookTypeToSearch) {
            await requestBookSearch(bookTypeToSearch);
        }
    }

    const onSelectBook = (book: IBook) => {
        const list = [...selectedBooksList] as IBook[];
        if (!list.some(b => b.id === book.id)) {
            list.push(book);
            setSelectedBooksList(list);
        }
    }

    const onClearBookFromList = (id: string) => {
        const list = [...selectedBooksList] as IBook[];
        const index = list.findIndex(b => b.id === id);
        list.splice(index, 1);
        setSelectedBooksList(list);
    }

    async function requestBookSearch(query: string) {
        const allBooks = await getBooksByType(query);
        setAllAvailableBooks(allBooks.items);
    }

    const debounceChange = debounce(requestBookSearch, 500);

    const onchange = (e: any) => {
        updateBookType(e);
        async function getAllBooks() {
            await debounceChange(e);
        }
        getAllBooks();
    }


    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    }, [bookTypeToSearch]);
    return (
        <>
            <div className="book--container">
                <div className="search-params">
                    <div>
                        <form
                            onSubmit={(e) => {
                                // debugger;
                                e.preventDefault();
                                updateBookTypeToSearch(bookType)
                            }}
                        >
                            <label htmlFor="search">&nbsp;</label>
                            <input
                                className="full-width" id="search"
                                autoFocus
                                name="gsearch"
                                type="search"
                                value={bookType}
                                placeholder="Search for books to add to your reading list and press Enter"
                                onChange={e => onchange(e.target.value)}
                            />
                        </form>
                        {!bookType && (
                            <div className="empty">
                                <p>
                                    Try searching for a topic, for example
                                        <a onClick={() => {
                                        updateBookType("Javascript");
                                    }}
                                    >
                                        {" "}
                                            "Javascript"
                                        </a>
                                </p>
                            </div>
                        )}

                    </div>
                </div>

            </div>
            {
                allAvailableBooks.length > 0 &&
                <div className="books-list-container">
                    <Books books={allAvailableBooks} onSelectBook={onSelectBook} />
                    <SideBar selectedBooksList={selectedBooksList} onClearBookFromList={onClearBookFromList} />
                </div>
            }
        </>
    );
};

export default BookSearch;
