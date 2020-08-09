import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
	topicList : [],
	articleList : [],
	recommendList : [],
	mouseIn : false,
	writerList :[],
	articlePage : 1,
	scrollShow : false
});
//immutable库解决不小心改变state的情况
export default (state = defaultState,action) =>{
	//immutable对象的set方法会结合之前immutable对象的值
	// 和设置的值返回一个全新的对象
	switch(action.type){
		case constants.SHOW_CODE :
			return state.set('mouseIn',true);
		case constants.HIDE_CODE :
			return state.set('mouseIn',false);
		case constants.GET_HOME_DATA :
			return state.merge({
				topicList : fromJS(action.topicList),
				articleList : fromJS(action.articleList),
				recommendList : fromJS(action.recommendList),
				writerList : fromJS(action.writerList)
			});
		case constants.ADD_NEW_LIST : 
			return state.merge({
				articleList : state.get('articleList').concat(action.moreArticleList),
				articlePage : action.newPage
			});
		case  constants.SCROLL_SHOW :
			return state.set('scrollShow',action.show);	
		default:
			return state;
	}
}