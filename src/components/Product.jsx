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

export const Product = () => {
	const price = 999;
	const imgUrl =
		'<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>';

	return (
		<>
			<h2>Tacos</h2>
			<img src={imgUrl} alt="Tacos With Lime" width="640" />
			<p>Price: {price} credits</p>
		</>
	);
};
export default Product;
