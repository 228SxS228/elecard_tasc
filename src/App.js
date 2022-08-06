import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from './App.module.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Pagination from "./components/pagination/Pagination";


function App() {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchCards()
    }, []);
    async function fetchCards() {
        try {
            setLoading(true);
            const response = await axios.get('http://contest.elecard.ru/frontend_data/catalog.json');
            setCards(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            alert(e);
        }
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(20);
    const lastCardsIndex = currentPage * cardsPerPage;
    const firstCardsIndex = lastCardsIndex - cardsPerPage;
    const currentCard = cards.slice(firstCardsIndex, lastCardsIndex);
    if(loading) {
        return <h2>Загрузка пожалуйста подождите...</h2>
    }
    return (
        <div className="App">
            <header className={styles.header}>
                <Header/>
            </header>
            <main className={styles.main}>
                <Card cards={currentCard}/>
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