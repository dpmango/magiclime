import React, { useState } from 'react';
import { cnTabsTab, Tabs } from '@consta/uikit/Tabs';
import Typography from 'components/Common/Typography';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames'

interface Item {
	label: string
	icon?: string
};

const items: Item[] = [
	{ label: 'Горячее', icon: '🔥' },
	{ label: 'Новое' },
	{ label: 'Популярное' },
];

const useStyles = makeStyles({
	root: {
		position: 'relative',
	},
	tab: {
		padding: '8px 4px 12px 4px'
	},
	active: {
		color: 'var(--color-typo-primary)',
	},
	results: {
		position: 'absolute',
		right: 0,
		top: 0,
		fontSize: '16px',
		lineHeight: '40px',
		fontWeight: 500
	},
});

const TabsBlock = () => {
	const styles = useStyles()
	const [value, setValue] = useState<Item | null>(items[0]);


	return (
		<div className={styles.root}>
			<Tabs
				value={value}
				onChange={({ value }) => setValue(value)}
				items={items}
				size="m"
				getLabel={(item) => item.label}
				renderItem={({ className, ref, onChange, key, item }) => (
					<button
						key={key}
						type="button"
						onClick={onChange}
						ref={ref}
						className={cnTabsTab(null, [className, classNames(styles.tab, { [styles.active]: item.label === value?.label })])}
					>
						{item.icon && <span style={{ marginRight: 4 }} role="img" aria-label="img">
							{item.icon}
						</span>}
						{item.label}
					</button>
				)}
			/>
			<Typography className={styles.results}>115 результатов</Typography>
		</div>
	);
};

export default TabsBlock
