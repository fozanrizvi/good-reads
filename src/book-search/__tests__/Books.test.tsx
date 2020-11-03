import React from 'react';
import { render } from '@testing-library/react';
import { Books } from './../Books'

test('renders Book List', () => {
    const props = {
        books: [
            { 
                id: '123',
                volumeInfo: {
                    authors: ['test author'],
                    title: 'test title',
                    publisher: 'john',
                    publishedDate: '11/12/19',
                    coverUrl: '',
                    description: '',
                    imageLinks: {
                        smallThumbnail: '',
                        thumbnail: ''                       
                    }
                },
                isRead: true
            }
        ],
        onSelectBook: jest.fn()        
    };
  const { container } = render(<Books {...props} />);
  const booksList = container.querySelector('.books-list');
  expect(booksList).toBeInTheDocument();
});
