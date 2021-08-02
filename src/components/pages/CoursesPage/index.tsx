import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
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
	const styles = useStyles()

	const [courses, setCourses] = useState<ICourse[]>([])
	const [tags, setTags] = useState<string[]>([])

	useEffect(() => {
		getMore()
	}, [])



	const getMore = () => {
		const _courses = Array.from({ length: 20 }).map((el, index) => ({ id: index }))
		setCourses([...courses, ..._courses])
	}

	return (
		<div className={styles.root}>
			<Banners />
			<div className={styles.content}>
				<div>
					<Typography weight="semibold" size="3xl" className={styles.title} >Все курсы</Typography>
					<Tags />
				</div>
				<div></div>

				<CoursesList items={courses} hasMore={true} getMore={getMore} />
				<Filters />
			</div>
		</div>
	);
};

export default CoursesPage;
