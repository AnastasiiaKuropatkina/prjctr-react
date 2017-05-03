//return не пишемо логіку, логіка має бути перед, return відображає

//state зарезервоване поле, при змінах перегенеровувати
//comstructor(props) {
	super(props); // передаэмо дані
	this.state = {// нові дані
		todos: props.todos
	}
}

// onClick - виклик кліку
onClick={(e) => this.toggleItem(e)}