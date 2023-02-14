import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
	const [cards, setCards] = useState([
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
	]);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [isGameWon, setIsGameWon] = useState(false);
	const [clickedCards, setClickedCards] = useState([]);

	useEffect(() => {
		if (score > highScore) setHighScore(score);

		if (score === 12) setIsGameWon(true);
	}, [score, highScore]);

	function shuffle() {
		let currentIndex = cards.length,
			temporaryValue,
			randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = cards[currentIndex];
			cards[currentIndex] = cards[randomIndex];
			cards[randomIndex] = temporaryValue;
		}
		setCards(cards);
	}

	function handleClick(e) {
		if (clickedCards.includes(e.target.innerText)) {
			setScore(0);
			setClickedCards([]);
		} else {
			setScore(score + 1);
			setClickedCards([...clickedCards, e.target.innerText]);
		}
		shuffle();
	}

	const list = cards.map((card, index) => {
		return (
			<div className={styles.card} key={index}>
				{card}
			</div>
		);
	});

	return (
		<div className={styles.app}>
			<div className={styles.cards} onClick={handleClick}>
				{list}
			</div>
		</div>
	);
}

export default App;
