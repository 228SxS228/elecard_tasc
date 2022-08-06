import React, {useState} from 'react';
import styles from "./style.module.css"



const Card = ({cards}) => {

    const [closeCard, setCloseCard] = useState(true);
    if(!closeCard) {
        localStorage.setItem('close card', JSON.stringify(cards));
        return null
    }

    return (
        <div className={styles.container}>
            {cards.map(cards =>
                <div className={styles.container__filling} key={cards.timestamp}>
                    <div className={styles.filling__img}>
                        <div className={styles.container__button}>
                            <a href="#"  onClick={() => setCloseCard(false)}>
                                <span>Закрыть</span>
                            </a>
                        </div>
                        <img className={styles.img} src={'http://contest.elecard.ru/frontend_data/' + cards.image} alt="test"/>
                    </div>
                    <div className={styles.filling__item}>
                        <label>Размер: <p>{(cards.filesize/1024).toFixed(2)} KB</p></label>
                        <label>Время: <p>{new Date(cards.timestamp * 1000).toLocaleTimeString()}</p></label>
                        <label>Категория: <p>{cards.category}</p></label>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;