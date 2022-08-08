import React, {useEffect, useState} from "react";
import axios from "axios";



const useCatalog = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);


    const removeCard = (image) => {
        if (cards){
            setCards([...cards].filter(cards => cards.image !== image));
            const deleteCards = localStorage.getItem('deleteCards');
            const id = cards.dataset.id;
            deleteCards.push(id);
            localStorage.setItem('deleteCards', deleteCards);
            console.log("Test")
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

    const [filter, setFilter] = useState([]);
    const handleFilter = (e) => {
        setFilter(e.target.value);
        setCards((prevState) => filterCards(e.target.value, prevState));
    }

    const filterCards = () => {
        fetchCards();
        if (cards.category) {
            return [...cards].sort();
        } else if (cards.timestamp) {
            return [...cards].sort((a, b) => a.timestamp - b.timestamp);
        } else if (cards.filesize) {
            return [...cards].sort((a, b) => a.filesize - b.filesize);
        }
    }
    if(loading) {
        return <h2>Загрузка пожалуйста подождите...</h2>
    }

    return {cards, filter, handleFilter, removeCard}
}

export default useCatalog;