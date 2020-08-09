import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';


const getInfo = (data) =>({
	type : constants.RECEIVE_AJAX,
	data : fromJS(data),
	totalPage : Math.ceil(data.length / 10)
}); //不暴露给其他组件的方法一般放在首尾部分

export const InputFocus = () =>({
	type: constants.INPUT_FOCUS,
});

export const InputBlur = () =>({
	type : constants.INPUT_BLUR,
})
export const MouseEnter = () =>({
	type : constants.MOUSE_ENTER,
})

export const MouseLeave = () =>({
	type : constants.MOUSE_LEAVE
})
export const ChangePage =(page) =>({
	type: constants.CHANGE_PAGE,
	page
})

export const getList = () => {
	return (dispatch) =>{
		axios.get('./api/handleList.json').then((res) =>{
			dispatch(getInfo(res.data.data));
		}).catch(() =>{
			console.log('err')
		})
	}
}