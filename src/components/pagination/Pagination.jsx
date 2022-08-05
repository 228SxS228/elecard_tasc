import React from 'react';

const Pagination = ({cardsPerPage, totalCards, paginate}) => {

    const pageNumber = [];
    for (let i = 1; i<=Math.ceil(totalCards / cardsPerPage); i++){
        pageNumber.push(i);
    }

    return (
        <div>
            <ul>
                {
                    pageNumber.map(number => (
                      <li key={number}>
                          <a href="!#" onClick={() => paginate(number)}>
                              {number}
                          </a>
                      </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;
