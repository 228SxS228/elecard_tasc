import React from "react";
import styles from './App.module.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Pagination from "./components/pagination/Pagination";
import useCatalog from "./hooks/useCatalog";
import Tree from "./components/tree/Tree";


function App() {
    const {
        cards,
        setCurrentPage,
        cardsPerPage,
        currentCard,
        handleFilter,
        filter,
        closeClick,
        deleteCard,
        cancelLocal,
        kindChange,
        category,
        kind,
        formatDate,
        parseName,

    } = useCatalog();


    return (
        <div className="App">
            <header className={styles.header}>
                <Header
                    handleFilter={handleFilter}
                    filter={filter}
                    cancelLocal={cancelLocal}
                    filteView={kind}
                    onChange={kindChange}
                />
            </header>
            <main className={styles.main}>
                {kind === "cards" ? (
                    <Card
                        cards={currentCard}
                        closeClick={closeClick}
                        deleteCard={deleteCard}
                        formatDate={formatDate}
                        parseName={parseName}
                    />
                ) : (
                    <Tree category={category} cards={cards}/>
                )}
            </main>
            <div className={styles.pagination}>
                <Pagination
                    cardsPerPage={cardsPerPage}
                    totalCards={cards?.length}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <footer className={styles.footer}>
                Aleksandr Goynik <br/> <a href="https://t.me/CawaCifi">Telegram</a>
            </footer>

        </div>
    );
}

export default App;