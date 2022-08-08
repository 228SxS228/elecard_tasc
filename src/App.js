import React, {useEffect, useState} from "react";
import styles from './App.module.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Pagination from "./components/pagination/Pagination";
import useCatalog from "./hooks/useCatalog";
import Tree from "./components/tree/Tree";



function App() {
    const {cards, setCurrentPage,cardsPerPage, currentCard, total, handleFilter, filter} = useCatalog();

    return (
        <div className="App">
            <header className={styles.header}>
                <Header handleFilter={handleFilter} cards={cards} filter={filter}/>
            </header>
            <main className={styles.main}>
                <Card cards={cards} />
                {/*<Tree cards={cards}/>*/}
            </main>
            <div className={styles.pagination}>
                {/*<Pagination*/}
                {/*    cardsPerPage = {cardsPerPage}*/}
                {/*    totalCards={total}*/}
                {/*    setCurrentPage={setCurrentPage}*/}
                {/*/>*/}
            </div>
            <footer className={styles.footer}>
                Aleksandr Goynik <br/> <a href="https://t.me/CawaCifi">Telegram</a>
            </footer>

        </div>
    );
}

export default App;