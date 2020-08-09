import React,{PureComponent} from 'react'
import {RecommendWrapper
		,RecommendItem,
		RecommendCode,
		RecommendShowCode
		} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
class Recommend extends PureComponent{
	render(){
		return (
			<RecommendWrapper>
				{this.props.list.map((item) => {
					return(
						<RecommendItem 
						imgUrl = {item.get('imgUrl')}
						key = {item.get('id')}
						/>
						)
					}
				)
			}
			<RecommendCode 
			onMouseEnter = {this.props.showCode}
			onMouseLeave = {this.props.hideCode}
			>
				<img 
				src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" 
				className = 'pic'
				alt=""
				/>
				<div className = 'info'>
					<div className = 'title'>下载简书App</div>
					<div className = 'find'>随时随地发现和创造内容</div>
				</div>
			</RecommendCode>
				{this.showCodefn()}
			</RecommendWrapper>
			)
	}
	showCodefn(){
	if (this.props.mouseIn) {
		return (
		<RecommendShowCode>
			<img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt=""/>
		</RecommendShowCode>
			)
		}else return null;
	}
}
const mapState = (state) =>({
	list : state.get('home').get('recommendList'),
	mouseIn : state.getIn(['home','mouseIn'])
})
const mapDispatch = (dispatch) =>({
	showCode(){
		const action = actionCreators.showCodeAction();
		dispatch(action);
	},
	hideCode(){
		const aciton = actionCreators.hideCodeAction();
		dispatch(aciton);
	}
})
export default connect(mapState,mapDispatch)(Recommend) 