import React from 'react';
import { render } from 'react-dom';

import Hello from './components';

const helloText = "i am text text text";

render(
	<Hello text={helloText} showDiv={true}/>,
	document.getElementById('app')
);

//return не пишемо логіку, логіка має бути перед, return відображає
