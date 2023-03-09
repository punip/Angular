

export type PublicationHouse = {
    _id: string,
    name: string,
    ratings: number,
    eastablishmentDate: string
}
export type Book = {
    _id: string,
    title: string,
    price: number,
    pages: number,
    authors: string[],
    publicationHouseId?: PublicationHouse
}