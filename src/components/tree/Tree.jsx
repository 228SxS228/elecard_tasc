import React, {useState} from 'react';
import useCatalog from "../../hooks/useCatalog";



const Tree = ({category, cards}) => {

    const {formatDate, parseName} = useCatalog();
    const [modal, setModal] = useState(false);
    const [cardVisible, setCardVisible] = useState(null);
    const [infoVisible, setInfoVisible] = useState(null);

    const toggleCard = (i) => {
        if(cardVisible === i){
            return setCardVisible(null);
        }
        setCardVisible(i);
    }
    const toggleInfo = (i) => {
        if(infoVisible === i){
            return setInfoVisible(null);
        }
        setInfoVisible(i);
    }

    return (
        <div>
            <ul>
                {category?.map((ctg, i) => (
                    <li key={i}>
                        <p onClick={() => toggleCard(i)}>
                            {category}
                            <span>{cardVisible === i ? "/" : "*"}</span>
                        </p>
                        <ul style={{display:cardVisible === i ? "block" : "none" ,
                            paddingLeft: 15}}>
                            {cards?.map((card, i)=>(
                                <>
                                    {card.category === category ? (
                                        <li>
                                            <p onClick={() => toggleInfo(i)}>
                                                {parseName(cards.image)}
                                                <span>{infoVisible === i ? "/" : "*"}</span>
                                            </p>
                                            <ul style={{
                                                display: infoVisible === i ? "block" : "none",
                                                paddingLeft: 15
                                            }}>
                                                <img
                                                    src={'http://contest.elecard.ru/frontend_data/' + cards.image}
                                                    alt={cards.image}
                                                />
                                                {modal ? (
                                                    <div onClick={() => setModal(false)}>
                                                        <div>
                                                            <img
                                                                onClick={(e) =>e.stopPropagation()}
                                                                src={'http://contest.elecard.ru/frontend_data/' + cards.image}
                                                                alt={cards.image}
                                                            />
                                                        </div>
                                                    </div>
                                                ) : null}
                                                <li>{(cards.filesize / 1024).toFixed(2)} KB</li>
                                                <li>{formatDate(cards.timestamp)}</li>
                                            </ul>
                                        </li>
                                    ): null}
                                </>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tree;
