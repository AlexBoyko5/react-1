const SearchBox = ({ filter, setFilter }) => {
	return (
		<input
			type="text"
			value={filter}
			onChange={(event) => setFilter(event.target.value)}
			placeholder="Search by name"
		/>
	);
};

export default SearchBox;
// Здесь SearchBox - это стрелочная функция, которая принимает пропсы ({ filter, setFilter }) и возвращает JSX
// SearchBox принимает filter и setFilter в качестве пропсов. filter - это текущее значение фильтра,
// а setFilter - это функция, которую можно использовать для обновления фильтра.
// input - это поле ввода, которое отображает текущее значение фильтра (filter)
// и обновляет его при каждом изменении(onChange).Значение поля ввода устанавливается в filter,
// а при изменении значения поля ввода вызывается setFilter, чтобы обновить filter.
// Таким образом, когда пользователь вводит текст в поле поиска, setFilter вызывается с новым значением, что приводит к обновлению filter в компоненте App и, следовательно, к обновлению списка контактов.
