import styles from '../App.module.css';

function Cards({ handleClick, cards }) {
	const list = cards.map((card) => {
		return (
			<div className={styles.card} key={card.id}>
				{card.name}
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
