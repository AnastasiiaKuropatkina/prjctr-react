import React from 'react';

const Hello = (props) => {
	const {text, showDiv} = props;
	//const showDiv = true;
	return (
		<div>
			<h1>{text}</h1>
			{
				showDiv &&
				<p>grergerhehthtr</p>
			}
		</div>
	);
};
//cont rgrg = props.rgrg
export default Hello;
//const not
//let chench

//дз дадати інпут при натисненні на нього дзявиться новмий елемент
