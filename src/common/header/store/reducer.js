import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
	mouseIn : false,
	focused : false,
	list : [],
	page : 1,
	totalPage : 1,
});
//immutable库解决不小心改变state的情况
export default (state = defaultState,action) =>{
	//immutable对象的set方法会结合之前immutable对象的值
	// 和设置的值返回一个全新的对象
	switch(action.type){
		case constants.INPUT_FOCUS:
			return state.set('focused',true);
		case constants.INPUT_BLUR:
			return state.set('focused',false);
		case constants.RECEIVE_AJAX:
			return state.merge({
				list : action.data,
				totalPage :action.totalPage
			})
		case constants.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case constants.CHANGE_PAGE:
			return state.set('page',action.page)
		default:
			return state;
	}
}