import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllCharactersQuery } from "../../slices/home/homeApiSlice";
import { setCharactersList } from "../../slices/home/homeSlice";
import CardComponent from "../../component/CardComponent";
import PaginationComp from "../../component/pagination";
import ErrorComponent from "../../component/ErrorComponent";

const HomeScreen = () => {
  const pageSize = 10; // Set pageSize to 10
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useGetAllCharactersQuery();

  // Calculate the total number of pages
  const totalItems = data ? data.length : 0;
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Slice the data for the current page
  const currentData = data?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    if (currentData) {
      dispatch(setCharactersList(currentData));
    }
  }, [currentData, dispatch]);

  return (
    <div>
      <ErrorComponent error={error} />

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <ul className="character_list_container">
            {currentData?.map((item) => {
              const { id } = item;
              return (
                <li key={id} className="card_container">
                  <CardComponent
                    item={item}
                    handleClick={() => navigate(`/userdetails/${id}`)}
                    isView={true}
                  />
                </li>
              );
            })}
          </ul>
          <div className="pagination-bar">
            <PaginationComp
              className=""
              currentPage={currentPage}
              totalCount={totalItems}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              selectedPage={currentPage}
              totalPage={totalPages}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
