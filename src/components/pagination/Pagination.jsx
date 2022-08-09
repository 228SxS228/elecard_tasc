import React from 'react';
import styles from "./style.module.css";

const Pagination = ({cardsPerPage, totalCards, setCurrentPage}) => {

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    const nextPage = () => setCurrentPage(prevState => prevState + 1);
    const prevPage = () => setCurrentPage(prevPage => prevPage - 1);
    const pageNumber = [];
    for (let i = 1; i<=Math.ceil(totalCards / cardsPerPage); i++){
        pageNumber.push(i);
    }

    return (
        <div className={styles.container}>
            <ul className={styles.container__ul}>
                {
                    pageNumber.map(number => (
                        <li key={number} className={styles.container__li}>
                            <a href="#" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <button className={styles.container__btn} onClick={prevPage}>Предыдущая</button>
            <button className={styles.container__btn} onClick={nextPage}>Следующая</button>
        </div>
    );
};

export default Pagination;
