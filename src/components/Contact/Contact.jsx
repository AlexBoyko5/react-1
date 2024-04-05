const Contact = ({ contact, deleteContact }) => (
	// добавл deleteContact  в список пропсов в компоненте Contact.
	<div>
		{contact.name}: {contact.number}
		<button onClick={() => deleteContact(contact.id)}>Delete</button>
		{/* передаем функцию deleteContact как свойство (prop) в компонент Contact
		из компонента ContactList */}
	</div>
);
export default Contact;

// const Contact = ({ contact }) => - это объявление функционального компонента React с именем Contact.
// Contact - это функция, которая принимает один аргумент - объект props.
// Внутри этого объекта props мы ожидаем свойство contact.
// ({ contact }) - это синтаксис деструктуризации в JavaScript
// Таким образом, contact внутри компонента Contact будет ссылаться на объект контакта,
// который был передан в качестве пропа при использовании компонента Contact

// {contact.name} и {contact.number}: Это выражения JavaScript внутри фигурных скобок.
// В JSX вы можете вставлять JavaScript - выражения в фигурные скобки.В данном случае,
// contact.name и contact.number - это свойства объекта contact, который передается
// в компонент Contact в качестве пропа.
// Эти выражения будут заменены на значения этих свойств при рендеринге компонента.
