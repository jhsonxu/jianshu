import {combineReducers} from 'redux-immutable' //把大的reducer拆分成小的
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../common/pages/home/store';
import {reducer as detailReducer} from '../common/pages/detail/store'
import {reducer as loginReducer} from '../common/pages/login/store'
//纯函数，固定的输入输出

const reducer = combineReducers({
	header : headerReducer,
	home : homeReducer,
	detail : detailReducer,
	login : loginReducer
})

export default reducer;



