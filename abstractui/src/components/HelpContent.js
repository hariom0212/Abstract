import React, {useState, useEffect} from 'react';
import "../css/helpContent.css";

export default function HelpContent() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await fetch('http://localhost:3000/cards');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Failed to fetch cards:', error);
            }
        }

        fetchCards();
    }, []);
    return (
        <div>
             <header className="header">
            <div className="logo">
                Abstract | <a>Help Center</a>
            </div>
            <button className="submit-request">Submit a request</button>
        </header>
         <div className="main-content">
            <h1 className="heading">How can we help?</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search" className="search-input" />
                <button className="search-button">→</button>
            </div>
            </div>
            <div className="box">
                <div className="row">
                    {cards.map(card => (
                        <div key={card.title} className="col-md-6">
                            <div className="card">
                                <h4 className="card-title">{card.title}</h4>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
}
