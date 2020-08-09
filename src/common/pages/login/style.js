import styled from 'styled-components'

export const LoginWrapper = styled.div`
	z-index :0;
	position : absolute;
	left : 0;
	right : 0;
	bottom : 0;
	top : 56px;
	height: 100%;
    min-height: 750px;
    font-size: 14px;
    background-color: #f1f1f1;
`
export const LoginBox =styled.div`
	width :400px;
	height : 180px;
	margin : 160px auto;
	padding-top : 20px;
	background : #fff;
	box-shadow : 0 0 8px rgba(0,0,0,.1);
`
export const Input = styled.input`
	box-sizing : border-box;
	display : block;
	width: 300px;
    height: 30px;
    margin : 10px auto;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
`
export const Button = styled.button`
	margin: 20px auto;
    width: 300px;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background : #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
`