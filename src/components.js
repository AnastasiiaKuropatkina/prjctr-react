import React from 'react';

const ToDo = (props) => {
	const { isDone, text } = props;
	if(isDone) {
		return <strike>{text}</strike>;
	} else {
		return <span>{text}</span>;
	}
};

const TodoList = (props) => {
	const { todos } = props;
	return (
		<div className='todo'>
			<ul className='todo__list'>
				{todos.map(item => (
					<li key={item.id} className='todo__item'>
						<ToDo isDone={item.isDone} text={item.text} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
