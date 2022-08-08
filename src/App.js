import React, {useState} from "react";
import styles from './App.module.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Pagination from "./components/pagination/Pagination";
import useCatalog from "./hooks/useCatalog";



function App() {
    const {cards, filter, handleFilter, removeCard} = useCatalog();

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(20);
    const lastCardsIndex = currentPage * cardsPerPage;
    const firstCardsIndex = lastCardsIndex - cardsPerPage;
    const currentCard = cards.slice(firstCardsIndex, lastCardsIndex);

    return (
        <div className="App">
            <header className={styles.header}>
                <Header filterValue={filter} onChange={handleFilter} cards={cards}/>
            </header>
            <main className={styles.main}>
                <Card cards={currentCard} removeCard={removeCard} />
            </main>
            <div className={styles.pagination}>
                <Pagination
                    cardsPerPage = {cardsPerPage}
                    totalCards={cards.length}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <footer className={styles.footer}>
                Footer
            </footer>

        </div>
    );
}

export default App;