import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ICourse } from 'types/interfaces/courses';
import MobileIcon from './mobile-image'
import Typography from 'components/Common/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '18px',
		boxSizing: 'border-box',
		background: '#8FF0E1',
		borderRadius: '10px',
		height: '100%',
		minHeight: '180px',

	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignSelf: 'flex-start',
		height: '100%'
	},
	image: {
		marginLeft: '10px'
	},
	title: {
		fontSize: '20px',
		lineHeight: '28px',
		margin: '8px 0 20px 0',
		fontWeight: 600,
	},
	detail: {
		fontSize: '14px',
		lineHeight: '20px',
	}
});


interface IProps {
	item: ICourse,
}

const Course = ({ item }: IProps) => {
	const styles = useStyles()

	return (
		<Link to={`/courses/${1}`} className={styles.root}>
			<div className={styles.content}>
				<div>
					<Typography as='p' className={styles.detail}>Онлайн-курс</Typography>
					<Typography as='p' weight='bold' className={styles.title}>Event-менеджер</Typography>
				</div>
				<Typography as='p' className={styles.detail}>
					<Typography as='span' weight='bold'>12&nbsp;</Typography>
					месяцев
				</Typography>
			</div>
			<div className={styles.image}>
				<MobileIcon />
			</div>
		</Link>
	);
};

export default Course
