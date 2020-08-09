import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Redirect} from 'react-router-dom';
import {LoginWrapper,
		LoginBox,
		Input,
		Button
		} from './style'

class Login extends PureComponent{
	render(){
		const {login,loginStatus} =this.props
		if (!loginStatus) {
			return (
			<LoginWrapper>
				<LoginBox>
					<Input placeholder = "账号" 
					ref = {input => this.account =input}
					/> 
				{/*ref接收了底层的DOM元素作为参数因为这里需要获取一个真实的DOM元素*/}，
					<Input 
					placeholder = "密码" type = "password" 
					ref = {input => this.password = input } 
					/>
					<Button onClick = {() => login(this.account,this.password)}>登录</Button>
				</LoginBox>
			</LoginWrapper>
			)
		}else{
			return <Redirect to = '/' /> //redirect重定向
		}
		
	}
}
const mapState = (state) => ({
	loginStatus : state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem,passwordElem){
		const action = actionCreators.login(accountElem,passwordElem);
		dispatch(action);
	}
})

export default connect(mapState,mapDispatch)(Login)