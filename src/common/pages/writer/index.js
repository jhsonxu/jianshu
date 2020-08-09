import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Writer extends PureComponent{

	render(){
		if (this.props.loginStatus) {
			return (
				<div>Writer</div>
				)			
		}else{
			return <Redirect to = '/login' />
		}
	}
}
const mapState = (state) =>({
	loginStatus : state.getIn(['login','login'])
})
export default connect(mapState,null)(Writer)