import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable' 

const detailInfoAction = (result) =>({
	type : constants.GET_DETAIL,
	title : fromJS(result.title),
	content : fromJS(result.content)
})
export const getDetailInfo = (id) => {
	//传入的id向后端请求信息
	return (dispatch) =>{ 
		axios.get('./api/detail.json?id=' + id).then((res) =>{
			const result = res.data.data;
			dispatch(detailInfoAction(result))
		})
	}
}