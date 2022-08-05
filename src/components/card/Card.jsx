import React, {useState} from 'react';
import styles from "./style.module.css"



const Card = ({cards}) => {

    return (
        <div className={styles.container}>
            {cards.map(cards =>
                <div className={styles.container__filling} key={cards.timestamp}>
                    <div className={styles.filling__img}>
                        <div className={styles.container__button}>
                            <a href="">
                                <span>Закрыть</span>
                            </a>
                        </div>
                        <img src="{}" alt="test"/>
                    </div>
                    <div className={styles.filling__item}>
                        <label>Filesize: <p>{cards.filesize}</p></label>
                        <label>timestamp: <p>{cards.timestamp}</p></label>
                        <label>category: <p>{cards.category}</p></label>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
