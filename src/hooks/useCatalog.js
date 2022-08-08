import React, {useEffect, useState} from "react";
import axios from "axios";



const useCatalog = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [cardsPerPage] = useState(20);
    // const lastCardsIndex = currentPage * cardsPerPage;
    // const firstCardsIndex = lastCardsIndex - cardsPerPage;
    // const currentCard = cards.slice(firstCardsIndex, lastCardsIndex);
    // const total = cards.length;
    const [filter, setFilter] = useState("category");


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

    const handleFilter = (e) => {
        setFilter(e.target.value);
        setCards((prevState) => filterCards(e.target.value, prevState));
    }
    const filterCards = (cards, value) => {
        if (value === "category") {
            return [...cards].sort();
        } else if (value === "timestamp") {
            return [...cards].sort((a, b) => a.timestamp - b.timestamp);
        } else if (value === "filesize") {
            return [...cards].sort((a, b) => a.filesize - b.filesize);
        }
    }

    if(loading) {
        return <h2>Загрузка пожалуйста подождите...</h2>
    }

    return {cards,  handleFilter, filter}
}

// currentCard, cardsPerPage, setCurrentPage, total,
export default useCatalog;