import React from 'react';
import {render} from 'react-dom';

import TodoList from './components/TodoList';

const items = [
	{id: 1, text: 'First item'},
	{id: 2, text: 'Second item', isDone: true},
	{id: 3, text: 'Third item'},
	{id: 4, text: 'Fourth item'}
]

render(
	<TodoList todos={items} />,
	document.getElementById('app')
);