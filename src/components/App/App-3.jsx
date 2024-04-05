import { useState } from 'react';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';

import './App3.css';
import 'modern-normalize';
import clsx from 'clsx';

function App() {
	const [contacts, setContacts] = useState([
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	]);
	// Тут ми передаємо масив контактів як проп в компонент ContactList. +
	// Компонент ContactList потім передає кожен окремий контакт в компонент Contact.
	// Mи використовуємо key проп в елементі списку для оптимізації роботи React.
	//Це повинно бути унікальне значення, в даному випадку - id контакта.

	const [filter, setFilter] = useState('');
	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	);

	// функция-аргумент (в данном случае (contact) => ...) вызывается для каждого элемента массива contacts.
	// Если функция возвращает true, элемент включается в новый массив.Если функция возвращает false,
	// элемент не включается в новый массив.
	// .includes(filter.toLocaleLowerCase()) - проверяет, содержит ли имя контакта подстроку filter. Оба значения приводятся к нижнему регистру
	// В этом коде:useState используется для создания состояния filter, которое хранит текущее значение фильтра.
	// filteredContacts - это новый массив контактов, который создается путем фильтрации исходного массива contacts.
	// Контакт включается в filteredContacts, если его имя включает в себя текущее значение фильтра(filter).
	//Фильтр нечувствителен к регистру, так как и имя контакта, и поисковый запрос преобразуются в нижний регистр перед сравнением.
	// SearchBox получает текущее значение фильтра (filter) и функцию для его обновления (setFilter) в качестве пропсов.
	// ContactList получает отфильтрованный список контактов (filteredContacts) в качестве пропса.

	const deleteContact = (id) => {
		setContacts(contacts.filter((contact) => contact.id !== id));
	}; //Добавьте функцию для удаления контакта в компоненте App.
	// Эта функция будет принимать идентификатор контакта и удалять контакт с этим идентификатором из состояния contacts.

	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm contacts={contacts} setContacts={setContacts} />
			<SearchBox filter={filter} setFilter={setFilter} />
			<ContactList
				contacts={filteredContacts}
				deleteContact={deleteContact}
			/>{' '}
			{/* замена contacts={contacts} на  contacts={filteredContacts} чтобы отобразить только отфильтрованные контакты
			передача функции deleteContact в компонент ContactList как свойство. */}
		</div>
	);
}

export default App;
