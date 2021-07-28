import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from 'components/Common/Typography'
import { ICourse } from 'types/interfaces/courses'

import { Tabs, Tags, CoursesList, Filters } from './blocks'

const useStyles = makeStyles({
	root: {
		display: 'grid',
		gridTemplateColumns: '84fr 26fr',
		gridGap: '24px'
	},
	title: {
		fontSize: '56px',
		lineHeight: '1.15em',
		marginBottom: '24px',
	},
	courses: {

	}
});


const CoursesPage = () => {
	const [courses, setCourses] = useState<ICourse[]>([])
	const [tab, setTab] = useState(null)
	const [tags, setTags] = useState<string[]>([])


	const styles = useStyles()

	return (
		<div className={styles.root}>
			<div>
				<Tags />
				<Tabs />
			</div>
			<div></div>

			<CoursesList items={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },]} hasMore={true} />
			<Filters />
		</div>
	);
};

export default CoursesPage;
