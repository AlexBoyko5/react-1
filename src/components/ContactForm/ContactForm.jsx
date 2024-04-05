import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

// Создание схемы валидации с помощью Yup
const validationSchema = Yup.object({
	name: Yup.string()
		.min(3, 'Must be at least 3 characters long') // Имя должно быть не менее 3 символов
		.max(50, 'Must be no more than 50 characters') // Имя не должно превышать 50 символов
		.required('Required field'), // Имя является обязательным полем
	number: Yup.string()
		.min(3, 'Must be at least 3 characters long') // Номер должен быть не менее 3 символов
		.max(50, 'Must be no more than 50 characters') // Номер не должен превышать 50 символов
		.required('Required field'), // Номер является обязательным полем
});

// создаем компонент ContactForm, который принимает два свойства (пропсы): contacts и setContacts.
// contacts - это массив контактов, который передается в компонент ContactForm.
// setContacts - это функция, которая используется для обновления этого массива контактов.
const ContactForm = ({ contacts, setContacts }) => {
	return (
		<Formik
			initialValues={{ name: '', number: '' }} // Исходные значения полей формы
			// запись "говорит": “Создай форму с двумя полями (name и number), которые изначально должны быть пустыми”
			validationSchema={validationSchema} // Применение схемы валидации
			onSubmit={(values, { resetForm }) => {
				// Функция, принимает два аргумента: values и resetForm.
				//values - это объект, который содержит текущие значения полей формы.
				//resetForm - это функция, для сброса формы к ее начальному состоянию.
				// Когда вы отправляете форму в Formik, он вызывает функцию onSubmit и передает ей два аргумента:
				// values и объект с набором вспомогательных методов и свойств.
				// Один из этих вспомогательных методов - это resetForm.
				// Вместо того чтобы получать весь объект с вспомогательными методами и свойствами,
				// используем деструктуризацию объекта { resetForm } для извлечения только того, что нужно,
				//  в данном случае - метода resetForm
				const newContact = { id: nanoid, ...values }; //  Здесь создается новый контакт. id: nanoid генерирует
				// уникальный идентификатор для нового контакта, а ...values добавляет все текущие
				//  значения полей формы в новый контакт.
				setContacts([...contacts, newContact]); // Добавление нового контакта в список контактов
				// (...contacts) - это текущий список контактов, а newContact - это контакт, который только что был создан.
				resetForm(); // Сброс формы
			}}
		>
			<Form>
				<Field name="name" type="text" placeholder="Name" />
				{/* Поле для ввода имени */}
				<ErrorMessage name="name" component="div" />
				{/* Отображение ошибок валидации для поля имени*/}
				<Field name="number" type="text" placeholder="Number" />
				{/*Поле для	ввода номера */}
				<ErrorMessage name="number" component="div" />
				{/*Отображениеошибок валидации для поля номера */}
				<button type="submit"> Add contact</button>
			</Form>
		</Formik>
	);
};
export default ContactForm;
