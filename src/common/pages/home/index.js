import React,{PureComponent} from 'react'
import {HomeWrapper,
		HomeLeft,
		HomeRight,
		BackTop
			} from './style'
import List from './components/List';
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {connect} from 'react-redux';
import {actionCreators} from './store'

class Home extends PureComponent {
	handleScrollTop(){
		window.scrollTo(0,0);
	}
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
				<img className = 'banner-img'  
				src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595744684895&di=a58bdbbdc0d8cbdf89f9de550bc157a2&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2148318713%2C3960000066%26fm%3D214%26gp%3D0.jpg"
				alt = ""
				/>
				<Topic/>
				<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Writer/>
				</HomeRight>
				{this.props.show ? <BackTop onClick = {this.handleScrollTop}>回到顶部</BackTop> : null}
			</HomeWrapper>
			)
		}
	componentDidMount(){
		this.props.getHomedata();
		this.bindEvents();
		}
		componentWillUnmount(){
			window.removeEventListener('scroll',this.props.handleScrollShow)
		}
	bindEvents(){
		window.addEventListener('scroll',this.props.handleScrollShow)
		}
	}

	const mapState = (state) =>({
		show : state.getIn(['home','scrollShow'])
	})

	const mapDispatch = (dispatch) =>({
		getHomedata(){
			const action = actionCreators.gethomeInfo();
			dispatch(action);
		},
		handleScrollShow(){
			const distance = document.documentElement.scrollTop;			
			if (distance > 200) {
				dispatch(actionCreators.scrollShow(true));
			}else{
				dispatch(actionCreators.scrollShow(false));
			}
		}
	})

export default connect(mapState,mapDispatch)(Home)