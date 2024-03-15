// src/Product.jsx

//!========== Было ===================

// const Product = () => {
// 	return (
// 		<div>
// 			<h2>Tacos</h2>
// 			<p>Price: 999 credits</p>{' '}
// 		</div>
// 	);
// };

// export default Product;
//^========================================================================================================
// src/components/Product.jsx
//!========== Добавл разметку изображения ===================

// export const Product = () => {
// 	return (
// 		<div>
// 			<h2>Tacos</h2>
// 			<img
// 				src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>"
// 				alt="Tacos With Lime"
// 				width="640"
// 			/>
// 			<p>Price: 999 credits</p>
// 		</div>
// 	);
// };
// export default Product;

//!========== Винесемо значення ціни в змінну price і використаємо її для того, щоб підставити значення змінної в JSX.
// export const Product = () => {
// 	const price = 999; //^ зміннa price

// 	return (
// 		<>
// 			<h2>Tacos</h2>
// 			<img
// 				src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>"
// 				alt="Tacos With Lime"
// 				width="640"
// 			/>
// 			<p>Price: {price} credits</p>
// 		</>
// 	);
// };
// export default Product;

//!========== Значення атрибутів вказуються в подвійних лапках, якщо це звичайний рядок,
//!========== у фігурних дужках, якщо значення відрізняється від рядка або знаходиться в змінній.

// src/components/Product.jsx

// export const Product = () => {
// 	const price = 999;
// 	const imgUrl =
// 		'<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>';

// 	return (
// 		<>
// 			<h2>Tacos</h2>
// 			<img src={imgUrl} alt="Tacos With Lime" width="640" />
// 			<p>Price: {price} credits</p>
// 		</>
// 	);
// };
// export default Product;
//!==========//!==========//!==========//!==========//!==========//!==========//!==========//!==========//!==========
// src/components/Product.jsx

const Product = (props) => {
	return (
		<div>
			<h2>{props.name}</h2>
			<img
				src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
				alt="Tacos With Lime"
				width="480"
			/>
			<p>Price: 999 credits</p>{' '}
		</div>
	);
};
export default Product;
//!======= В самому компоненті Product використаємо отримані пропси в розмітці.
// src/components/Product.jsx

// export const Product = (props) => {
// 	return (
// 		<div>
// 			<h2>{props.name}</h2>
// 			<img src={props.imgUrl} alt={props.name} width="480" />
// 			<p>Price: {props.price} credits</p>
// 		</div>
// 	);
// };

//!======= Оскільки props – це об'єкт, ми можемо деструктуризувати його у підписі функції.
//! Це робить код чистішим і читабельнішим.
// src/components/Product.jsx

// export const Product = ({ name, imgUrl, price }) => {
// 	return (
// 		<div>
// 			<h2>{name}</h2>
// 			<img src={imgUrl} alt={name} width="480" />
// 			<p>Price: {price} credits</p>
// 		</div>
// 	);
// };

//!======= Для того щоб вказати значення властивостей за замовчуванням,
//!======= використовується синтаксис значень за замовчуванням під час деструктуризації пропсів.
// src/components/Product.jsx

// export const Product = ({
// 	name,
// 	imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
// 	price,
// }) => (
// 	<div>
// 		<h2>{name}</h2>
// 		<img src={imgUrl} alt={name} width="480" />
// 		<p>Price: {price} credits</p>
// 	</div>
// );
//!======= Умовний рендеринг

// export const Mailbox = ({ name, unreadMessages }) => {
// 	return (
// 		<div>
// 			<p>Hello {name}</p>
// 			<p>
// 				{unreadMessages.length > 0
// 					? `You have ${unreadMessages.length} unread messages`
// 					: 'No unread messages'}
// 			</p>
// 		</div>
// 	);
// };

// const Mailbox = ({ username, messages }) => {
// 	return (
// 		<div>
// 			<p>Hello {username}</p>
// 			{messages.length > 0 ? (
// 				<div>
// 					<p>You have {messages.length} unread messages</p>
// 					<MessageList messages={messages} />
// 				</div>
// 			) : (
// 				<p>No unread messages</p>
// 			)}
// 		</div>
// 	);
// };

//!=======
//  const favouriteBooks = [
// 	{ id: 'id-1', name: 'JS for beginners' },
// 	{ id: 'id-2', name: 'React basics' },
// 	{ id: 'id-3', name: 'React Router overview' },
// ];

// const BookList = ({ books }) => {
// 	return (
// 		<ul>
// 			{books.map((book) => {
// 				return <li>{book.name}</li>;
// 			})}
// 		</ul>
// 	);
// };

// const App = () => {
// 	return (
// 		<>
// 			<h1>Books of the week</h1>
// 			<BookList books={favouriteBooks} />
// 		</>
// 	);
// };
//!===== Типізація пропсів (не работает) ============================================================
// src/components/Product.jsx

// import PropTypes from 'prop-types';

// const Product = ({
// 	name,
// 	imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
// 	price,
// }) => (
// 	<div>
// 		<img src={imgUrl} alt={name} width="480" />
// 		<h2>{name}</h2>
// 		<p>Price: {price} credits</p>{' '}
// 	</div>
// );

// // Опис типів пропсів компонента
// Product.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	imgUrl: PropTypes.string,
// 	price: PropTypes.number.isRequired,
// };

// export default Product;
