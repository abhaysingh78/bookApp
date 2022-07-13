import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../img/book.svg";
const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuSm, setShowMenuSm] = useState(false);
  const [search, setSearch] = useState(false);

  const [searchs, setSearchs] = useState("");
  const [show, setShow] = useState(false);
  const [book, setBook] = useState([]);

  const searchApi = async e => {
    e.preventDefault();

    let result = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchs}&key=yourapi&maxResults=40`
    );
    result = await result.json();
    setBook(result.items);

    if (book) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    if (searchs === "") {
      setShow(false);
    }
  }, [searchs]);
  return (
    <div className='dark:bg-gray-900'>
      <div className='2xl:container 2xl:mx-auto md:py-5 lg:px-20 md:px-6 p-4'>
        <div className='flex items-center justify-between'>
          <div className='lg:w-3/12'>
            <div className='w-7/12 hidden lg:flex items-center space-x-3 border-b border-gray-200 pb-2'>
              <div>
                <svg
                  className='fill-stroke text-gray-600 dark:text-white'
                  width={20}
                  height={20}
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
                    stroke='currentColor'
                    strokeWidth='1.25'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19.0004 19.0004L14.6504 14.6504'
                    stroke='currentColor'
                    strokeWidth='1.25'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <form onSubmit={searchApi}>
                <input
                  type='search'
                  value={searchs}
                  placeholder='search for Book'
                  onChange={e => setSearchs(e.target.value)}
                  className='bg-transparent text-sm text-gray-600 focus:outline-none'
                />
              </form>
            </div>
            <button
              onClick={() => setShowMenu(true)}
              aria-label='Open Menu'
              className='text-gray-800 dark:text-white hidden md:block lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded'
            >
              <svg
                className='fill-stroke'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20 18L4 18'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14 12L4 12'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M18 6L4 6'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button
              onClick={() => setSearch(true)}
              aria-label='Search Menu'
              className='text-gray-800 dark:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5'
            >
              <svg
                className='fill-stroke'
                width={20}
                height={20}
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
                  stroke='currentColor'
                  strokeWidth='1.25'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M18.9984 19.0004L14.6484 14.6504'
                  stroke='currentColor'
                  strokeWidth='1.25'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className='lg:w-6/12 flex flex-col justify-center items-center space-y-3.5'>
            <div role='img' className='cursor-pointer flex'>
              <img src={Book} className='w-8' />
              <h2 className='text-center flex justify-center relative top-1'>
                Book Collection
              </h2>
            </div>
            <div className='hidden lg:block'>
              <ul className='flex items-center space-x-10'>
                <li>
                  <Link
                    to='/'
                    className='dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:ring-gray-800 hover:underline'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/javascript'
                    className='dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:ring-gray-800 hover:underline'
                  >
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link
                    to='/india'
                    className='dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:ring-gray-800 hover:underline'
                  >
                    India
                  </Link>
                </li>
                <li>
                  <Link
                    to='/biography'
                    className='dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:ring-gray-800 hover:underline'
                  >
                    Biography
                  </Link>
                </li>
                <li>
                  <Link
                    to='/html'
                    className='dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:ring-gray-800 hover:underline'
                  >
                    HTML
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='lg:w-3/12 flex justify-end items-center space-x-4'>
            <button
              onClick={() => setShowMenuSm(true)}
              aria-label='open menu'
              className='text-gray-800 dark:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5'
            >
              <svg
                className='fill-stroke'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 6H20'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10 12H20'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M6 18H20'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='md-menu'
          className={`${
            showMenu ? "md:block" : ""
          } hidden lg:hidden absolute z-10 inset-0 h-screen w-full dark:bg-gray-800 bg-gray-800 bg-opacity-70 dark:bg-opacity-70`}
        >
          <div className='relative w-full h-screen'>
            <div className='absolute inset-0 w-1/2 bg-white dark:bg-gray-900 p-6 justify-center'>
              <div className='flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700'>
                <div className='flex items-center space-x-3 mx-2'>
                  <div>
                    <svg
                      className='fill-stroke text-gray-800 dark:text-white'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
                        stroke='currentColor'
                        strokeWidth='1.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M18.9984 19.0004L14.6484 14.6504'
                        stroke='currentColor'
                        strokeWidth='1.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <form onSubmit={searchApi}>
                    <input
                      type='search'
                      value={searchs}
                      placeholder='search for Book'
                      onChange={e => setSearchs(e.target.value)}
                      className='text-sm text-gray-600 dark:text-gray-300 focus:outline-none bg-transparent'
                    />
                  </form>
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  aria-label='close menu'
                  className='focus:outline-none focus:ring-2 focus:ring-gray-800'
                >
                  <svg
                    className='fill-stroke text-gray-800 dark:text-white'
                    width={16}
                    height={16}
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 4L4 12'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4 4L12 12'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
              <div className='mt-8'>
                <ul className='flex flex-col space-y-8'>
                  <li className='flex items-center justify-between'>
                    <Link
                      to='/'
                      className='dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='flex items-center justify-between'>
                    <Link
                      to='/javascript'
                      className='dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                    >
                      Javascript
                    </Link>
                  </li>
                  <li className='flex items-center justify-between'>
                    <Link
                      to='/india'
                      className='dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                    >
                      India
                    </Link>
                  </li>
                  <li className='flex items-center justify-between'>
                    <Link
                      to='/biography'
                      className='dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                    >
                      Biography
                    </Link>
                  </li>
                  <li className='flex items-center justify-between'>
                    <Link
                      to='/html'
                      className='dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline'
                    >
                      HTML
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Search menu */}
        <div
          id='mobile-search-menu'
          className={`${
            search ? "flex" : "hidden"
          } md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white dark:bg-gray-900 pt-4`}
        >
          <div className='w-full'>
            <div className='flex items-center justify-between border-b border-gray-200 pb-3 mx-4'>
              <div className='flex items-center space-x-3 mx-2'>
                <div>
                  <svg
                    className='fill-stroke text-gray-800 dark:text-white'
                    width={20}
                    height={20}
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
                      stroke='currentColor'
                      strokeWidth='1.25'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M18.9984 19.0004L14.6484 14.6504'
                      stroke='currentColor'
                      strokeWidth='1.25'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <form onSubmit={searchApi}>
                  <input
                    type='search'
                    value={searchs}
                    placeholder='search for Book'
                    onChange={e => setSearchs(e.target.value)}
                    className='text-sm text-gray-600 focus:outline-none bg-transparent'
                  />
                </form>
              </div>
              <button
                aria-label='close menu'
                onClick={() => setSearch(false)}
                className='text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800'
              >
                <svg
                  className='fill-stroke'
                  width={20}
                  height={20}
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15 5L5 15'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5 5L15 15'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Menu */}
        <div
          id='mobile-menu'
          className={`${
            showMenuSm ? "flex" : "hidden"
          } md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-4`}
        >
          <div className='w-full'>
            <div className='flex items-center justify-between border-b border-gray-200 pb-4 mx-4'>
              <div />
              <div>
                <p className='text-base font-semibold text-gray-800'>Menu</p>
              </div>
              <button
                aria-label='close menu'
                onClick={() => setShowMenuSm(false)}
                className='text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800'
              >
                <svg
                  className='fill-stroke'
                  width={20}
                  height={20}
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15 5L5 15'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5 5L15 15'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='mt-6 mx-4'>
            <ul className='flex flex-col space-y-8'>
              <li className='flex items-center justify-between'>
                <Link
                  to='/'
                  className='text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  Home
                </Link>
              </li>
              <li className='flex items-center justify-between'>
                <Link
                  to='/javascript'
                  className='text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  Javascript
                </Link>
              </li>
              <li className='flex items-center justify-between'>
                <Link
                  to='/india'
                  className='text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  India
                </Link>
              </li>
              <li className='flex items-center justify-between'>
                <Link
                  to='/biography'
                  className='text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  Biography
                </Link>
              </li>
              <li className='flex items-center justify-between'>
                <Link
                  to='/html'
                  className='text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline'
                >
                  HTML
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {
        <div className='card'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full p-8'>
            {/* <div className='mx-auto container py-8'>
          <div className='flex flex-wrap items-center lg:justify-between justify-center'> */}
            {show &&
              book.length > 0 &&
              book.map(item => {
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
                        <a
                          href='#'
                          class='relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full'
                        >
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
                                {item.volumeInfo.title}
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
                                  <strong>By:</strong>{" "}
                                  {item.volumeInfo.authors[0]}
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
                        </a>
                      </div>
                      {/* Card 1 Ends */}
                    </>
                  );
                }
              })}
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
