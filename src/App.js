import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from './App.module.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Pagination from "./components/pagination/Pagination";


function App() {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetchCards()
    }, []);

    async function fetchCards() {
        try {
            const response = await axios.get('http://contest.elecard.ru/frontend_data/catalog.json');
            setCards(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(35);
    const lastCardsIndex = currentPage * cardsPerPage;
    const firstCardsIndex = lastCardsIndex - cardsPerPage;
    const currentCard = cards.slice(firstCardsIndex, lastCardsIndex);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="App">
            <header className={styles.header}>
                <Header/>
            </header>
            <main className={styles.main}>
                <Card cards={currentCard}/>
            </main>
            <Pagination
                cardsPerPage = {cardsPerPage}
                totalCards={cards.length}
                paginate={paginate}
            />
            <footer className={styles.footer}>
                Footer
            </footer>

        </div>
    );
}

export default App;
