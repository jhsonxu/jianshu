import styled from 'styled-components';
import codePic from '../../../statics/code.png'

export const HomeWrapper = styled.div`
	overflow:hidden;
	width : 960px;
	margin : 0 auto;
	padding : 0 15px;
`
export const HomeLeft = styled.div`
	box-sizing : border-box;
	float : left;
	padding-left : 15px;
	padding-top: 30px;
	padding-right 0;
	width : 640px;
	.banner-img{
		width:625px;
		height:270px;
	}
`
export const HomeRight = styled.div`
	box-sizing : border-box;
	width :280px;
	float :right;
	margin-left : 40px;
	padding : 30px 0 0;
`
export const BackTop = styled.div`
	cursor : pointer;
	position : fixed;
	bottom : 40px;
	right :40px;
	width : 60px;
	height : 60px;
	line-height : 60px;
	text-align : center;
	font-size :14px;
	border : 1px solid #969696
`
export const TopicWrapper = styled.div`
	overflow : hidden;
	padding : 20px 0 10px 0;
`
export const TopicItem = styled.div`
	float : left;
	height: 32px;
	line-height : 32px;
	background : #f7f7f7;
	font-size :14px;
	margin-right : 18px;
	margin-bottom : 18px;
	padding-right : 10px;
	color : #000;
	border : 1px solid #dcdcdc;
	border-radius : 4px;
	.topic-pic{
		display : block;
		float: left;
		width :32px;
		height :32px;
		margin-right : 10px;
	}
`
export const ListItem = styled.div`
	overflow : hidden;
	width : 625px;
	padding : 20px 0;
	border-bottom : 1px solid #f0f0f0;
	border-top : 1px solid #dcdcdc;
	.pic{
		display :block;
		float : right;
		width : 150px;
		height :100px;
		border-radius :10px;
	}
`
export const ListInfo = styled.div`
	width : 458px;
	height : 130px;
	float : left;
	.title{
		margin: -7px 0 4px;
	    display: inherit;
	    font-size: 18px;
	    font-weight: 700;
	    line-height: 1.5;
	}
	.desc{
		margin: 0 0 8px;
	    font-size: 13px;
	    line-height: 24px;
	    color: #999;
	}
`
export const LoadMore = styled.div`
	cursor : pointer;
	width: 100%;
    height: 20px;
    line-height : 20px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
`

export const RecommendWrapper = styled.div`
	position : relative;
	margin-top: -4px;
    padding-bottom: 4px;
`
export const RecommendItem =styled.a.attrs({
	href : '/'
})`
	display : block;
	width : 100%;
	height : 50px;
	margin-bottom:6px;
	background : url(${(props) => props.imgUrl});
	background-size : contain;
`
export const RecommendCode = styled.div.attrs({
	href :'/'
})`	cursor : pointer;
	position : relative;
	display : block;
	box-sizing : border-box;
	margin-top : 15px;
	margin-bottom: 30px;
    padding: 10px 22px;
    width: 280px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
	.pic{
		width : 60px;
		height :60px;
	}
	.info{
	position:absolute;
	top : 25px;
	display: inline-block;
    margin-left: 15px;
	}
	.title{
	height:21px;
	font-size: 15px;
    color: #333;
	}
	.find{
	margin-top: 4px;
    font-size: 13px;
    color: #999;
	}
`
export const RecommendShowCode = styled.div`
	position: absolute;
    top: 30px;
    left: 48px;
    width : 180px;
    height : 180px;
    z-index: 1060;
    display: block;
    padding: 1px;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    word-spacing: normal;
    word-wrap: normal;
    font-size: 14px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2)
    img{
    	width:180px;
    	height:180px;
    }
`
export const WriterWrapper = styled.div`
	height : 400px;
	width : 100%;
`
export const WriterTitle = styled.div`
	height ： 20px;
	.spantitle{
		display : inline-block;
		margin-top : 8px;
		font-size : 14px;
		color : #969696;
	}
	.atitle{
		display : inline-block;
		font-size : 14px;
		float : right;
		color : #969696;
		margin-top : 8px;
		text-decoration : none;	
	}
`
export const WriterList = styled.ul`
	margin: 0 0 20px;
	padding-left : 0;
    text-align: left;
    list-style: none;
    height : 50px;
    li{
	margin-top: 15px;
	line-height: 20px;
	.a_pic{
		display: block;
	    cursor: pointer;
		float: left;
	    width: 48px;
	    height: 48px;
	    margin-right: 10px;
    img{
    	width: 100%;
	    height: 100%;
	    border: 1px solid #ddd;
	    border-radius: 50%;
    }
	}
	.a_focus{
	text-decoration :none;
	display : inline-block;
	float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
	}
	.a_name{
	color : #333;
	padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
	}
	p{
		margin-top: 2px;
    font-size: 12px;
    color: #969696;
	}
    }
`