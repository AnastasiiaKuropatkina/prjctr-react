import React, {Component} from 'react';
import ToDo from './ToDo';

class TodoList extends Component {
	//const { todos } = props;
	constructor(props) {
		super(props);
		this.state = {
			todos: props.todos
		}

		this.onSubmit = this.onSubmit.bind(this);
	};

	toggleItem(id){
		let todos =this.state.todos;
		for (let i in todos) {
			if (todos[i].id == id) {
				todos[i].isDone = todos[i].isDone === true ? false : true;
				break;
			}
		};
		this.setState({
			todos: todos
		});
	}

	onSubmit(event){
		event.preventDefault();
		console.log('state:',this.state);
		console.log('this.textInput:', this.textInput.value);
		console.log('event:',event.target.value);
		if(!!this.textInput.value) {
			this.addItem(this.textInput.value);
			this.textInput.value = '';
		}
	}

	addItem(text) {
        this.setState({
          todos: [
            ...this.state.todos,
            { id: Math.random(), isDone: false, text: text }
          ]
        });
    }

	render() {
		return (
			<div className='todo'>
				<form onSubmit= {this.onSubmit }>
					<input ref={
						(input) => this.textInput = input
					}
					type='text'
					placeholder='Add todo' />
					<button type="submit">SUBMIT</button>
				</form>
				<ul className='todo__list'>
					{this.state.todos.map(item => (
						<li 
							key={item.id}
							className='todo__item' 
							onClick={(e) => this.toggleItem(item.id)}
						>
							<ToDo isDone={item.isDone} text={item.text} />
						</li>
					))}
				</ul>
			</div>
		);
	}
};

export default TodoList;