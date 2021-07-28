import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';


const useStyles = makeStyles({
	root: {

	},
	content: {
		maxWidth: '1128px',
		width: '100%',
		margin: '0 auto',
		padding: '32px 20px',
	}
});


const MainLayout: FC = ({ children }) => {
	const styles = useStyles()

	return (
		<div className={styles.root} >
			{/* HEADER */}
			{/* MENU */}
			{/* FOOTER */}

			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
