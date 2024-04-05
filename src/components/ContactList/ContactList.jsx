import Contact from '../Contact/Contact';
const ContactList = ({ contacts, deleteContact }) => (
	// добавл deleteContact в список пропсов в компоненте ContactList.
	<div>
		{contacts.map((contact) => (
			<Contact
				key={contact.id}
				contact={contact}
				deleteContact={deleteContact}
			/>
		))}
		{/* передаем функцию deleteContact как свойство (prop) в компонент Contact
		из компонента Арр */}
	</div>
);
export default ContactList;

// contacts.map((contact) => ...): map проходит по каждому элементу массива contacts
// (каждый элемент является объектом contact) и для каждого контакта выполняет функцию, указанную в скобках() => ....
// <Contact key={contact.id} contact={contact} />: Это JSX-синтаксис для создания элемента компонента Contact.
//  Каждый компонент Contact получает два пропса: key и contact.
// key={contact.id}: key - это специальный проп в React, который помогает React идентифицировать,
// какие элементы были изменены, добавлены или удалены.В данном случае, мы используем id контакта в качестве ключа.
// contact={contact}: Здесь мы передаем текущий объект contact в компонент Contact в качестве пропса.
