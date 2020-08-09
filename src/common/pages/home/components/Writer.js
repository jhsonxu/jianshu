import React,{PureComponent} from 'react'
import {WriterWrapper,
		WriterTitle,
		WriterList
		} from '../style.js'
import {connect} from 'react-redux'

class Writer extends PureComponent{
	render(){
		return (
			<WriterWrapper>
				<WriterTitle>
					<span className = "spantitle">
						推荐作者
					</span>
					<a href="/" className = "atitle">换一批</a>
				</WriterTitle>
				<WriterList>
					{this.props.list.map((item) =>{
						return (
							<li key = {item.get('id')}>
							<a 
							href="/"
							className = "a_pic"
							>
								<img 
								src= {item.get('imgUrl')} 
								alt=""
								/>
							</a>
							<a href="/"
							   className = "a_focus"
							>
							+关注
							</a>
							<a 
							href="/"
							className = "a_name"
							>
							{item.get('writerName')}
							</a>
							<p>{item.get('writerInfo')}</p>
							</li>
							)
					})}
					
				</WriterList>
			</WriterWrapper>
			)
	}
}
const mapState = (state) =>({
	list : state.getIn(['home','writerList'])
})

export default connect(mapState,null)(Writer)