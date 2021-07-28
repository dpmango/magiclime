import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import Typography from 'components/Common/Typography';
import FormikRadiobuttons from 'components/molecules/Controls/Formik/Radiobuttons';
import FormikCheckboxGroup from 'components/molecules/Controls/Formik/CheckboxGroup';

const useStyles = makeStyles({
	root: {
	},
	formBlock: {
		marginBottom: "24px"
	},
	title: {
		marginBottom: "14px"
	},
	small: {
		marginBottom: "6px"
	},
	group: {
		"& .RadioGroup-Item:not(:last-child), & .Checkbox-Label:not(:last-child)": {
			marginBottom: "14px",
		},
		"& .Radio-Label, & .Checkbox-Label": {
			marginLeft: "12px",
			fontWeight: 300
		}
	}
});

interface ICategory {
	id: number,
	name: string
}

const Filters = () => {
	const styles = useStyles()
	const difficults = ['Любой', 'Для новичков', 'Для специалистов'];

	const categories = [
		{ id: 1, name: 'Маркетинг' },
		{ id: 2, name: 'Финансы' },
		{ id: 3, name: 'Управление' },
		{ id: 4, name: 'Личный рост' },
		{ id: 5, name: 'Бизнес' },
		{ id: 6, name: 'Маркетинг1' },
		{ id: 7, name: 'Маркетинг32' },
		{ id: 8, name: 'Маркетинг4' },
		{ id: 9, name: 'Маркетинг5' },
	] as ICategory[]

	const educationTypes = ['Профессия', 'Программа', 'Курс']



	return (
		<>
			<Formik
				validateOnChange={true}
				initialValues={{ difficult: 'Любой', categories: [], education_types: [] }}
				enableReinitialize={true}
				onSubmit={(data, { setSubmitting }) => {
					console.log(data)
				}}
			>
				{({ values, setFieldValue, isSubmitting }) => (
					<Form>
						<div className={styles.formBlock}>
							<FormikCheckboxGroup
								label="Категории"
								name='categories'
								items={categories}
								direction="column"
								getLabel={(item: ICategory) => item.name}
								className={styles.group}
							/>
						</div>

						<div className={styles.formBlock}>
							<FormikRadiobuttons
								label="Уровень сложности"
								name="difficult"
								items={difficults}
								getLabel={(item) => item as string}
								direction="column"
								className={styles.group}
							/>
						</div>

						<div className={styles.formBlock}>
							<FormikCheckboxGroup
								label="Тип обучения"
								name='education_types'
								items={educationTypes}
								direction="column"
								getLabel={(item: string) => item}
								className={styles.group}
							/>
						</div>


					</Form>
				)}
			</Formik>
		</>

	);
};

export default Filters
