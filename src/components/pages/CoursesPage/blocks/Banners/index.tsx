import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';


const useStyles = makeStyles({
	root: {
		position: 'relative',
		marginBottom: '48px',
	},
	background: {
		position: 'absolute',
		top: 0,
		left: 'calc(50% + 12px)',
		width: 'calc(100% + 120px)',
		background: '#F7F7F7',
		height: '-webkit-fill-available',
		zIndex: 1,
		'@media screen and (max-width: 1224px)': {
			display: 'none'
		},
	},
	content: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridGap: '24px',
		'@media screen and (max-width: 1224px)': {
			gridTemplateColumns: '1fr',
			gridGap: '48px'
		},
	},
	button: {
		background: 'linear-gradient(90deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
	},
	image: {
		height: '290px',
		wodth: '100%',
		background: 'linear-gradient(90deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
	},
	first: {
		marginTop: '95px',
	},
	second: {
		padding: '90px 32px 28px 32px',
		zIndex: 2,
		'@media screen and (max-width: 1224px)': {
			padding: 0,
		},
	},
	recomended: {
		marginBottom: '12px',
	},
	title: {
		fontSize: '64px',
		lineHeight: '72px',
		paddingBottom: '16px',
		marginBottom: '32px',
		position: 'relative',
		'&::before': {
			content: "''",
			position: 'absolute',
			left: 0,
			bottom: 0,
			height: '2px',
			width: '40px',
			background: 'var(--color-typo-primary)',
		},

		'@media screen and (max-width: 1440px)': {
			fontSize: '40px',
			lineHeight: '56px',
		},
	},
	description: {
		color: 'var(--color-typo-secondary)!important',
		marginBottom: '24px'
	},
	secondTitle: {
		marginTop: '24px'
	},
	details: {
		margin: '16px 0',
		display: 'flex',
		"& > span": {
			marginRight: '16px',
		}
	},

});

const Banners = () => {
	const styles = useStyles()

	return (
		<div className={styles.root}>
			<div className={styles.background}></div>
			<div className={styles.content}>
				<div className={styles.first}>
					<Text className={styles.recomended} weight="semibold" transform="uppercase">рекомендованное</Text>
					<Text className={styles.title} as="h2">Блокчейн и криптовалюты</Text>
					<Text as="p" className={styles.description}>Ваш универсальный путеводитель в мире криптовалют. Независимо от того, являетесь ли вы новичком, пытающимся разобраться в майнинге, или опытным пользователем, желающим разработать торговую стратегию, мы сможем вам помочь. </Text>
					<Button size="l" label="Открыть модуль" className={styles.button} />
				</div>
				<div className={styles.second}>
					<div className={styles.image}></div>
					<Text className={styles.secondTitle} size="xl" weight="semibold">Что такое биткоин?</Text>
					<div className={styles.details}>
						<Text size="m" as="span" view="ghost">3 модуля</Text>
						<Text size="m" as="span" view="ghost">24 задания</Text>
					</div>
					<Button size="m" label="15 опыта" className={styles.button} />
				</div>
			</div>
		</div>
	);
};

export default Banners
