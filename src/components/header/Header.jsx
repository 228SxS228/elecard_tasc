import React from 'react';
import styles from './style.module.css'


const Header = ({filterValue, onChange, useFilter}) => {

    return (
        <div className={styles.header__container}>
            <div className={styles.filter}>
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
                            <input type="radio" checked={null} onChange={null}/>
                            <p className={styles.item__text}>в виде древовидного списка</p>
                        </label>
                    </li>
                </ul>
                <p className={styles.filter__text}>Соритировать по: </p>
                <ul className={styles.category__ul}>
                    <li>
                        <label className={styles.category__item}>
                            <input type="radio"
                                   name="filter"
                                   checked={filterValue === useFilter.category}
                                   value={useFilter.category}
                                   onChange={onChange}
                            />
                            <p className={styles.item__text}>Категории</p>
                        </label>
                    </li>
                    <li>
                        <label className={styles.category__item}>
                            <input type="radio"
                                   name="filter"
                                   checked={filterValue === useFilter.timestamp}
                                   value={useFilter.timestamp}
                                   onChange={onChange}
                            />
                            <p className={styles.item__text}>Дате</p>
                        </label>
                    </li>
                    <li>
                        {/*<label className={styles.category__item}>*/}
                        {/*    <input type="radio"*/}
                        {/*           name="filter"*/}
                        {/*    />*/}
                        {/*    <p className={styles.item__text}>Имени</p>*/}
                        {/*</label>*/}
                    </li>
                    <li>
                        <label className={styles.category__item}>
                            <input type="radio"
                                   name="filter"
                                   checked={filterValue === useFilter.filesize}
                                   value={useFilter.filesize}
                                   onChange={onChange}
                            />
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