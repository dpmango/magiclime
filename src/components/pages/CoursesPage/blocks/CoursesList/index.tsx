import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ICourse } from 'types/interfaces/courses';
import Course from './Course'
import { Button } from '@consta/uikit/Button';
import icons from '../icons'

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	list: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridGap: '24px',
		'@media screen and (max-width: 1224px)': {
			gridTemplateColumns: '1fr',
		},
	},
	button: {
		margin: '40px auto 0',
		display: 'block'
	}
});
interface IProps {
	items: ICourse[],
	hasMore?: boolean
}


const CoursesList = ({ items, hasMore = false }: IProps) => {
	const styles = useStyles()

	return (
		<div className={styles.root}>

			<div className={styles.list}>
				{items.map(item => (
					<Course item={item} key={item.id} />
				))}
			</div>

			{hasMore &&
				<Button
					label="Показать еще 20 курсов"
					view="secondary"
					onClick={() => console.log('get more')}
					className={styles.button}
					iconLeft={icons.RefreshIcon}
				/>}
		</div>
	);
};

export default CoursesList
