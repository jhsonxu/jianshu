import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'

const loginChange = () => ({
	type : constants.LOGIN,
})

export const logout = () => ({
	type : constants.LOGOUT
})

export const  login = (account,password) =>{
	return (dispatch) =>{
		axios.get('/api/login.json?account='+ account + '&password=' + password).then((res) =>{
			if (res.data.data) {
				dispatch(loginChange());
			}else alert('err')
		})
	}
}