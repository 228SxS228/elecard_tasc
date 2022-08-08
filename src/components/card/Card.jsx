import React, {useEffect, useState} from 'react';
import styles from "./style.module.css"


const Card = ({cards}) => {
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

    useEffect(() => {
        localStorage.setItem("deleteCard", JSON.stringify(deleteCard));
    }, [deleteCard]);
    const cancelLocal = () => {
        setDeleteCard([]);
        localStorage.clear();
    }
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
    return (
        <div className={styles.container}>
            {cards.map(cards =>
                (
                    <>
                        {deleteCard.includes(cards.image) ? (
                            ""
                        ) : (
                            <div className={styles.container__filling} key={cards.image}>
                                <div className={styles.filling__img}>
                                    <div className={styles.container__button}>
                                        <a href="#" onClick={() => closeClick(cards.image)}>
                                            <span>Закрыть</span>
                                        </a>
                                    </div>
                                    <img className={styles.img}
                                         src={'http://contest.elecard.ru/frontend_data/' + cards.image}
                                         alt={cards.image}
                                    />
                                </div>
                                <div className={styles.filling__item}>
                                    <label>Имя:
                                        <p>{parseName(cards.image)}</p>
                                    </label>
                                    <label>Размер:
                                        <p>{(cards.filesize / 1024).toFixed(2)} KB</p>
                                    </label>
                                    <label>Время:
                                        <p>{formatDate(cards.timestamp)}</p>
                                    </label>
                                    <label>Категория:
                                        <p>{cards.category}</p>
                                    </label>
                                </div>
                            </div>
                        )}
                    </>
                )
            )}
        </div>
    );
};

export default Card;