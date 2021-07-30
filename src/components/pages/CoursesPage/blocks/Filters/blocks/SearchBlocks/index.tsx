import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@consta/uikit/TextField';

const useStyles = makeStyles({
	content: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	splitter: {
		margin: '0 5px',
		width: '15px',
		height: '2px',
		top: 'calc(50% - 1px)',
		background: 'var(--color-typo-primary)',
	},
	title: {
		fontSize: '16px',
		lineHeight: '24px',
		marginBottom: '12px',
	}
});

interface IProps {
	title: string
	placeholders?: string[]
}

const Filters: FC<IProps> = ({ title, placeholders = ['', ''] }) => {
	const styles = useStyles()


	return (
		<div>
			<p className={styles.title}>{title}</p>
			<div className={styles.content}>
				<TextField placeholder={placeholders[0]} />
				<div className={styles.splitter} />
				<TextField placeholder={placeholders[1]} />
			</div>
		</div>
	);
};

export default Filters
