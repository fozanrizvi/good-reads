

export interface IBook {
    id: string;

    volumeInfo: IBookVolume;
    isRead: boolean;

}
export interface IBookVolume {
    authors: string[];
    title: string;
    publisher: string;
    publishedDate: string;
    coverUrl: string;
    description: string;
    imageLinks: IImageLinks;

}

export interface IImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}