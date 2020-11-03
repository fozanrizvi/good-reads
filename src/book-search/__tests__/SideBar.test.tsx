import React from 'react';
import { render } from '@testing-library/react';
import { SideBar } from './../SideBar'

test('renders list items', () => {
    const props = {
        selectedBooksList: [
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
        onClearBookFromList: jest.fn()        
    };
  const { container } = render(<SideBar {...props} />);
  const booksList = container.querySelector('ul');
  expect(booksList).toBeInTheDocument();
});
