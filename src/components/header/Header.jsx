import React from 'react';
import styles from './style.module.css'

const Header = () => {
    return (
        <div className={styles.header__container}>
            <div className={styles.filter} >
                <p className={styles.filter__text}>Вид карточек:</p>
                <ul className={styles.category__ul}>
                    <li>
                        <label htmlFor="" className={styles.category__item}>
                            <input type="radio"/>
                            <p className={styles.item__text}>в виде карточек</p>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="" className={styles.category__item}>
                            <input type="radio"/>
                            <p className={styles.item__text}>в виде древовидного списка</p>
                        </label>
                    </li>
                </ul>
                <p className={styles.filter__text}>Соритировать по: </p>
                <ul className={styles.category__ul}>
                    <li>
                        <label className={styles.category__item}>
                            <input type="radio"/>
                            <p className={styles.item__text}>Категории</p>
                        </label>
                    </li>
                    <li>
                        <label className={styles.category__item}>
                            <input type="radio"/>
                            <p className={styles.item__text}>Дате</p>
                        </label>
                    </li>
                    <li>
                        <label className={styles.category__item}>
                            <input type="radio"/>
                            <p className={styles.item__text}>Имени</p>
                        </label>
                    </li>
                    <li>
                        <label className={styles.category__item}>
                            <input type="radio"/>
                            <p className={styles.item__text}>Размеру файла</p>
                        </label>
                    </li>
                </ul>
            </div>
            <button className={styles.reset__button}>Сбросить категории</button>
        </div>

    );
};

export default Header;