import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const BookCard = ({ category }) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    bookApi();
  }, []);

  const bookApi = async () => {
    let result = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${category}&key=yourapi&maxResults=35`
    );
    result = await result.json();
    setBook([...book, ...result.items]);
  };
  console.log(book);

  return (
    <InfiniteScroll
      dataLength={book.length}
      next={bookApi}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className='card'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full p-8'>
          {book.map(item => {
            const thumbnail =
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.thumbnail;

            const price =
              item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            const subTitle = item.volumeInfo.subtitle;

            if (
              thumbnail !== undefined &&
              price !== undefined &&
              subTitle !== undefined
            ) {
              return (
                <>
                  {/* Card 1 */}
                  <div class='relative mx-auto w-full'>
                    <div class='shadow p-4 rounded-lg bg-white'>
                      <div class='flex justify-center relative rounded-lg overflow-hidden h-52'>
                        <div class='transition-transform duration-500 transform ease-in-out hover:scale-110 w-full'>
                          <img className='inline' src={thumbnail} />
                        </div>
                      </div>

                      <div class='mt-4'>
                        <h2
                          class='font-medium text-base md:text-lg text-gray-800 line-clamp-1'
                          title='New York'
                        >
                          {item.volumeInfo.title.slice(0, 29)}...
                        </h2>
                        <p
                          class='mt-2 text-sm text-gray-800 line-clamp-1'
                          title='New York, NY 10004, United States'
                        >
                          {item.volumeInfo.description.slice(0, 197)}...
                        </p>
                      </div>

                      <div class='grid grid-cols-2 mt-8'>
                        <div class='flex items-center'>
                          <div class='relative'></div>

                          <p class='ml-2 text-gray-800 line-clamp-1'>
                            <strong>By:</strong> {item.volumeInfo.authors[0]}
                          </p>
                        </div>

                        <div class='flex justify-end'>
                          <p class='inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl'>
                            <span class='text-sm uppercase'>Rs:</span>
                            <span class='text-lg'>{price}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card 1 Ends */}
                </>
              );
            }
          })}
        </div>
      </div>
      {/* //  </div> */}
      {/* // </div> */}
    </InfiniteScroll>
  );
};

export default BookCard;
