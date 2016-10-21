import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

const Hello = () => <h1>Hello There!!</h1>;

render((<Hello />), document.getElementById('app'));
