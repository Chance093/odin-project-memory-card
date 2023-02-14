import React, { useState } from 'react';
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

	return <div className={styles.app}>Hello World</div>;
}

export default App;
