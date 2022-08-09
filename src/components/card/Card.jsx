import React, {useEffect, useState} from 'react';
import styles from "./style.module.css"
import useCatalog from "../../hooks/useCatalog";


const Card = ({cards, closeClick, deleteCard, formatDate, parseName}) => {

    return (
        <div className={styles.container}>
            {cards?.map(i =>
                (
                    <>
                        {deleteCard?.includes(i.image) ? (
                            ""
                        ) : (
                            <div className={styles.container__filling} key={i.image}>
                                <div className={styles.filling__img}>
                                    <div className={styles.container__button}>
                                        <a href="#" onClick={() => closeClick(i.image)}>
                                            <span>Закрыть</span>
                                        </a>
                                    </div>
                                    <img className={styles.img}
                                         src={'http://contest.elecard.ru/frontend_data/' + i.image}
                                         alt={i.image}
                                    />
                                </div>
                                <div className={styles.filling__item}>
                                    <label>Имя:
                                        <p>{parseName(i.image)}</p>
                                    </label>
                                    <label>Размер:
                                        <p>{(i.filesize / 1024).toFixed(2)} KB</p>
                                    </label>
                                    <label>Время:
                                        <p>{formatDate(i.timestamp)}</p>
                                    </label>
                                    <label>Категория:
                                        <p>{i.category}</p>
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