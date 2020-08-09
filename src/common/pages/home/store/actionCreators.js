import * as constants from './constants'
// import {fromJS} from 'immutable';
import axios from 'axios'
import {fromJS} from 'immutable'
const changehomedata = (homedata) =>({ 
		type : constants.GET_HOME_DATA,
		topicList : homedata.topicList,
		articleList : homedata.articleList,
		recommendList : homedata.recommendList,
		writerList : homedata.writerList
})

const addNewList = (newdata,newPage) =>({
	type : constants.ADD_NEW_LIST,
	moreArticleList : fromJS(newdata),
	newPage
}) 

export const showCodeAction = () =>({
	type : constants.SHOW_CODE
}) 
export const hideCodeAction = () =>({
	type : constants.HIDE_CODE
})

export const scrollShow = (show) =>({
	type : constants.SCROLL_SHOW,
	show
})

export const gethomeInfo = () =>{
	return (dispatch) => {
		axios.get('./api/home.json').then((res) => {
			const action = changehomedata(res.data.data);
			dispatch(action);
		}).catch(() => {console.log('err')})
	}
}

export const addList = (page) =>{
	return (dispatch) =>{
		axios.get('./api/homeList.json?page=' + page).then((res) => {
			const action = addNewList(res.data.data , page+1);
			dispatch(action);
		}).catch(() => {console.log('err')})
	}
}
