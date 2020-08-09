import React,{PureComponent} from 'react';
import {ListItem,
		ListInfo,
		LoadMore
		} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom'

class List extends PureComponent{
	render(){
	const {list,changeList,page} =this.props;
	return (
	<div>
		{list.map((item,index) =>{
			return (
				<Link  key = {index} to={'/detail?id=' + item.get('id')}>
					<ListItem>
						<img 
						className = "pic"
						src= {item.get('imgUrl')}
						alt = ""
						/>
						<ListInfo>
							<h3 className = "title"> { item.get('title') } </h3>
							<p className = "desc"> { item.get('desc') } </p>
						</ListInfo>
					</ListItem>	
				</Link>
				)
		})}
		<LoadMore onClick = {() => {changeList(page)}}>更多文字</LoadMore>
	</div>
		)
	}
}

const mapState = (state) =>({
	list : state.getIn(['home','articleList']),
	page : state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) =>({
	changeList(page){
		const action = actionCreators.addList(page);
		dispatch(action);
	}
})

export default connect(mapState,mapDispatch)(List)