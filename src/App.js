import React, {useEffect, useMemo, useState} from "react";
import axios from "axios";
import styles from './App.module.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Pagination from "./components/pagination/Pagination";



function App() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const removeCard = image => {
        if (cards){
            setCards([...cards].filter(cards => cards.image !== image))
        }
    }

    useEffect(() => {
        fetchCards();
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

    function makeEnum(arr) {
        let obj = {};
        for (let val of arr) {
            obj[val] = Symbol(val);
        }
        return Object.freeze(obj);
    }
    const useFilter = makeEnum(["category", "timestamp", "filesize"])
    const [filter, setFilter] = useState([]);

    const handleFilter = (e) => {
        setFilter(e.target.value);
        setCards((prevState) => filterCards(e.target.value, prevState));
    }

    const filterCards = () => {
        if (useFilter.category) {
            fetchCards();
            return [...cards].sort();
        } else if (useFilter.timestamp) {
            return [...cards].sort((a, b) => a.timestamp - b.timestamp);
        } else if (useFilter.filesize) {
            return [...cards].sort((a, b) => a.filesize - b.filesize);
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
                <Header filterValue={filter} onChange={handleFilter} useFilter={useFilter}/>
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