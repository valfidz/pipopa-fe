import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Pagination } from "./pagination/pagination";

export default function ContentInspiration() {
    const [postItems, setPostItems] = useState([]);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [totalItems, setTotalItems] = useState(0);

    // Search states
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedSearchQuery, setSubmittedSearchQuery] = useState('');

    const be_site = process.env.REACT_APP_BE_URL

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    }

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`${be_site}/api/public/all`, {
            params: {
              page: currentPage,
              limit: itemsPerPage,
              search: submittedSearchQuery
            }
          });

          if (response.data) {
            setPostItems(response.data.posts);
            setTotalItems(response.data.pagination.total);
          }
        } catch (error) {
          console.error('Failed to load posts', error);
        }
      }

      fetchPost();
    }, [be_site, currentPage, itemsPerPage, submittedSearchQuery])

    const handlePageChange = (page) => {
      setCurrentPage(parseInt(page));
    }

    const handleSearch = (event) => {
      event.preventDefault();
      setCurrentPage(1);
      setSubmittedSearchQuery(searchQuery);
    }

    const capitalizeLetter = (string) => {
      if (!string) {
          return ''
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3"></div>
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find your inspirations</h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                This is your life and it's ending one minute @ a time...</p>
            </div>

            {/* Article Section */}
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {postItems.map((item) => (
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">

                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={`${be_site}/api/image/${item.featured_image}`} alt="" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between bg-white p-6">

                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <p>{capitalizeLetter(item.category_name)}</p>
                      </p>
                      <Link to={`/post/${item.slug}`} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-3 text-base text-gray-500">{item.meta_description}</p>
                      </Link>
                    </div>

                    <div className="mt-6 flex items-center">
                      <div className="ml-3">
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <p>{formatDate(item.created_at)}</p>
                          <span aria-hidden="true">·</span>
                          {/* <span>6 min read</span> */}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                ))}
              </div>

              <Pagination
                currentPage={currentPage.toString()}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                onPageChange={handlePageChange}
              />
          </div>
        </div>
    )
  }
  