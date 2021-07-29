import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Text } from '@consta/uikit/Text';
import { ICourse } from 'types/interfaces/courses'

import { Tags, CoursesList, Filters, Banners } from './blocks'
import Typography from 'components/Common/Typography';

const useStyles = makeStyles({
	root: {
		position: 'relative',
		top: '-95px',
	},
	content: {
		display: 'grid',
		gridTemplateColumns: '84fr 26fr',
		gridGap: '24px',
	},
	title: {
		fontSize: '32px',
		lineHeight: '56px',
		marginBottom: '32px',
	},
	courses: {

	}
});


const CoursesPage = () => {
	const [courses, setCourses] = useState<ICourse[]>([])
	const [tags, setTags] = useState<string[]>([])


	const styles = useStyles()

	return (
		<div className={styles.root}>
			<Banners />
			<div className={styles.content}>
				<div>
					<Typography weight="semibold" size="3xl" className={styles.title} >Все курсы</Typography>
					<Tags />
				</div>
				<div></div>

				<CoursesList items={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },]} hasMore={true} />
				<Filters />
			</div>
		</div>
	);
};

export default CoursesPage;
