import React,{Component} from 'react'
import {DetailWrapper,
	DetailLeft,
	DetailRight,
	DetailArticle
} from './style'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux' 
import {actionCreators} from './store'
class Detail extends Component{
render(){
	return (
		<DetailWrapper>
			<DetailLeft>
				<h1 className = "articleTitle">
					{this.props.title}
				</h1>
				<DetailArticle dangerouslySetInnerHTML = {{__html : this.props.content}}>
				</DetailArticle>
			</DetailLeft>
			<DetailRight>12</DetailRight>
		</DetailWrapper>
		)
}
componentDidMount(){
	this.props.getDetail(this.props.location.search.replace(/[^0-9]/ig,'')); //这个地方把id值传出来给后端
	}
}

const mapState = (state) =>({
	title : state.getIn(['detail','title']),
	content : state.getIn(['detail','content'])
})
const mapDispatch = (dispatch) => ({
	getDetail(id){ //传出给后端
		const action = actionCreators.getDetailInfo(id)
		dispatch(action);
	}
})
export default connect(mapState,mapDispatch)(withRouter(Detail));