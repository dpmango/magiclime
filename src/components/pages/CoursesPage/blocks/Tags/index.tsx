import React, { useState } from 'react';
import { IconProps } from '@consta/uikit/Icon';
import { makeStyles } from '@material-ui/core';
import { Button } from '@consta/uikit/Button';
import classNames from 'classnames';

import icons from '../icons'

interface Item {
	id: string
	label: string
	iconLeft?: React.FC<IconProps>
};



const items: Item[] = [
	{
		id: 'Маркетинг',
		label: 'Маркетинг',
		iconLeft: icons.MarketingIcon
	},
	{
		id: 'Финансы',
		label: 'Финансы',
		iconLeft: icons.FinansesIcon
	},
	{
		id: 'Управление',
		label: 'Управление',
		iconLeft: icons.ManagementIcon
	},
	{
		id: 'Личный рост',
		label: 'Личный рост',
		iconLeft: icons.PersonalUpgradeIcon
	},
	{
		id: 'Бизнес',
		label: 'Бизнес',
		iconLeft: icons.BusinessIcon
	}
];

const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		overflowX: 'auto'
	},
	button: {
		fontSize: '14px',
		lineHeight: '20px',
		marginRight: '12px',
		marginBottom: '12px'
	},

});

const TagsBlock = () => {
	const styles = useStyles()
	const [values, setValues] = useState<string[]>([]);

	const handleToggle = (id: string) => {
		let newValues = [...values]

		if (newValues.includes(id)) {
			newValues = newValues.filter(val => val !== id)
		} else {
			newValues = [...newValues, id]
		}
		setValues(newValues)
	}


	return (
		<div className={styles.root}>
			{items.map(item => {
				const active = values.includes(item.id)
				return (
					<Button
						key={item.id}
						label={item.label}
						form="round"
						view={active ? "primary" : "secondary"}
						onClick={() => handleToggle(item.id)}
						className={styles.button}
					/>
				)
			})}

		</div>
	);
};

export default TagsBlock
