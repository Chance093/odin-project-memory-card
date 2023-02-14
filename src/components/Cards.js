import styles from '../App.module.css';

function Cards({ handleClick, cards }) {
	const list = cards.map((card, index) => {
		return (
			<div className={styles.card} key={index}>
				{card}
			</div>
		);
	});

	return (
		<div className={styles.cards} onClick={handleClick}>
			{list}
		</div>
	);
}

export default Cards;
