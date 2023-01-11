import React, { useRef, useCallback } from 'react';
import { ReactComponent as SearchIcon } from 'shared/images/overused/NewsSearch.svg';
import { ReactComponent as ClearIcon } from 'shared/images/overused/x-circle.svg';

import debounce from 'lodash.debounce';
import style from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getQueryParams } from 'redux/news/news-selectors';
import { setQueryParams } from 'redux/news/news-slice';

export const Search = () => {
	const { query } = useSelector(getQueryParams);

	const dispatch = useDispatch();
	const input = useRef();
	if (input.current) input.current.value = query ?? '';

	const clearBtnHandler = () => {
		input.current.value = '';
		dispatch(setQueryParams({}));
	};

	const changeHandler = ({ target: { value } }) => {
		dispatch(setQueryParams({ query: value }));
	};
	// eslint-disable-next-line
	const debouncedChangeHandler = useCallback(debounce(changeHandler, 700), []);

	return (
		<div className={style.wrapper}>
			<input
				ref={input}
				onChange={debouncedChangeHandler}
				className={style.input}
				type="text"
				placeholder="Search"
			/>
			{input.current?.value ? (
				<button className={style.btn} onClick={clearBtnHandler}>
					<ClearIcon className={style.clear} />
				</button>
			) : (
				<SearchIcon className={style.search} />
			)}
		</div>
	);
};
