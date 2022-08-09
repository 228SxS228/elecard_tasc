import React, {useEffect, useState} from "react";
import axios from "axios";



const useCatalog = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(20);
    const lastCardsIndex = currentPage * cardsPerPage;
    const firstCardsIndex = lastCardsIndex - cardsPerPage;
    const currentCard = cards?.slice(firstCardsIndex, lastCardsIndex);
    const [filter, setFilter] = useState("category");
    const [kind, setKind] = useState("cards");
    const [category, setCategory] = useState([]);

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
    const [local, getLocal] = useState(JSON.parse(localStorage.getItem("deleteCard")));
    const [deleteCard, setDeleteCard] = useState([]);
    const closeClick = (key) => {
        setDeleteCard((prevState) => [...prevState, key])
    }
    useEffect(() => {
        if (getLocal !== null) {
            setDeleteCard(local);
        }
    }, [getLocal]);
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const dateDay = date.getDate();
        return dateDay + " " + month + " " + year;
    };
    const parseName = (str) => {
        const array = str.split("/");
        const name = array[1].match(/[a-z]+/g);
        name.pop();
        const capitalize = (str) => {
            return str[0].toUpperCase() + str.slice(1);
        };
        return name.map(capitalize).join(" ");
    };

    useEffect(() => {
        localStorage.setItem("deleteCard", JSON.stringify(deleteCard));
    }, [deleteCard]);
    const cancelLocal = () => {
        setDeleteCard([]);
        localStorage.clear();
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
    const getCategory = () => {
        const oneKind = [...new Set(cards.map((a) => a.category))];
        setCategory(oneKind);
    }
    const kindChange = (e) => {
        setKind(e.target.value);
    }

    if(loading) {
        return <h2>Загрузка пожалуйста подождите...</h2>
    }

    return {
        cards,
        handleFilter,
        filter,
        currentCard,
        cardsPerPage,
        setCurrentPage,
        deleteCard,
        cancelLocal,
        closeClick,
        getCategory,
        category,
        kindChange,
        formatDate,
        parseName,
        kind
    }
}


export default useCatalog;