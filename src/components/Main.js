require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react'
import { render } from 'react-dom'

//let yeomanImage = require('../images/yeoman.png');

class MyDemo extends React.Component {
    render() {
        return (
            <div className="box">
                <Menu />
            </div>
        )
    }
}
export default class Menu extends React.Component {
    render() {
        return (
        	<div>
	            <div className="left fl">
	                <div className="img">
	                 <img src="./images/yeoman.png" />
	                </div>
	                 <span>左侧栏</span>
	            </div>
	            <div className="right fl">
	                <span>右侧栏</span>
	            </div>
          </div>
        )
    }
}
render((
    <MyDemo />
), document.getElementById('app'))


