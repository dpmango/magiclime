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
		marginBottom: '32px',
		overflowX: 'auto'
	},
	button: {
		border: '1px solid rgba(0, 66, 105, 0.28)',
		color: '#0F0F14',
		fontSize: '14px',
		lineHeight: '20px',
		marginRight: '14px'
	},
	active: {
		border: '1px solid rgba(0, 120, 210, 0.5)',
		'& .Button-Icon_position_left path': {
			fill: '#0071B3'
		}
	}

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
						iconLeft={item.iconLeft}
						iconRight={active ? icons.CloseIcon : undefined}
						iconSize='s'
						key={item.id}
						label={item.label}
						view="secondary"
						className={classNames(styles.button, { [styles.active]: active })}
						onClick={() => handleToggle(item.id)}
					/>
				)
			})}

		</div>
	);
};

export default TagsBlock
