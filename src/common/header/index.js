import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {HeaderWrapper,
		Logo,
		Nav,
		NavItem,
		NavSearch,
		SearchInfo,
		SearchInfoTitle,
		SearchInfoSwitch,
		SearchInfoItem,
		SearchInfoList,
		Addtion,
		Button,
		NavContainer,
		SearchWrapper} from './style';
import {actionCreators} from './store';
import {actionCreators as loginactionCreators } from '../pages/login/store';
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom'; //用Link标签代替a标签

class Header extends PureComponent{

	showSearchList(){
		const {focused,list,page,totalPage,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage} =this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			for(let i = (page - 1)*10; i < page*10; i++){
			pageList.push(
				<SearchInfoItem key = { newList[i] } >{ newList[i] }</SearchInfoItem>
				)
			}
		}
		
		if (focused || mouseIn) {
		return (
			<SearchInfo 
			onMouseEnter = {handleMouseEnter} 
			onMouseLeave = {handleMouseLeave}
			>
				<SearchInfoTitle>
				热门搜索
				<SearchInfoSwitch onClick = {() => {handleChangePage(page,totalPage,this.spinIcon)}}>
				<span ref = {(icon) =>{this.spinIcon = icon} } className="iconfont spin">&#xe851;</span> 
				换一批
				</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{pageList}
				</SearchInfoList>
			</SearchInfo>
			)
		}
		else return null;
	}
	render(){
		const {focused,handleInputFocus,handleInputBlur,list,login,logout} =this.props;
		return (
		<HeaderWrapper>
			<Link to = '/'>
				<Logo />
			</Link>
		<NavContainer>
			<Nav>
			<NavItem className = 'left active'>首页</NavItem>
			<NavItem className = 'left'>下载App</NavItem>
			{!login ? <Link to = '/login'><NavItem className = 'right'>登录</NavItem></Link> : <NavItem onClick = {logout} className = 'right'>退出</NavItem>}
			<NavItem className = 'right'>
				<span className="iconfont">&#xe636;</span>
			</NavItem>
			<SearchWrapper>
				<CSSTransition
					in = {focused}	
					timeout = {200}
					classNames = "slide"
				>
				<NavSearch
					className = {focused ? 'focused' : ''}
					onFocus = {() => {handleInputFocus(list)}}
					onBlur = {handleInputBlur}
				></NavSearch>
				</CSSTransition>
				<span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</span>
				{this.showSearchList(focused)}
			</SearchWrapper>
		</Nav>
		<Addtion>
			<Link to='/writer'>
				<Button className = 'writing'>
					<span className="iconfont">&#xe708;</span>
					写文章
				</Button>
			</Link>
			<Button className = 'reg'>注册</Button>
		</Addtion>
		</NavContainer>
		</HeaderWrapper> //带样式的div标签
	)
	}
}
	
const mapStateToProps =(state) =>{
	return{
		focused : state.getIn(['header','focused']),
		list : state.getIn(['header','list']),
		page : state.getIn(['header','page']),
		totalPage :state.getIn(['header','totalPage']),
		mouseIn : state.getIn(['header','mouseIn']),
		login : state.getIn(['login','login'])
	}
}
const mapDispatchToProps = (dispatch) =>{
	return {
		handleInputFocus(list){
			if (list.size === 0) {
			dispatch(actionCreators.getList());//ajax
			}
			dispatch(actionCreators.InputFocus());
		},
		handleInputBlur(){
			dispatch(actionCreators.InputBlur())
		},
		handleMouseEnter(){
			dispatch(actionCreators.MouseEnter())
		},
		handleMouseLeave(){
			dispatch(actionCreators.MouseLeave())
		},
		handleChangePage(page,totalPage,spin){
			let originAngle =  spin.style.transform.replace(/[^0-9]/ig,'');
			if (originAngle) {
				originAngle = parseInt(originAngle,10)
			}else{
				originAngle = 0;
			};
			spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
			if (page < totalPage) {
				dispatch(actionCreators.ChangePage(page + 1));
			}else dispatch(actionCreators.ChangePage(1));
			
		},
		logout(){
			dispatch(loginactionCreators.logout());
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
