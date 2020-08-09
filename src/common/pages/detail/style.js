import styled from 'styled-components'

export const DetailWrapper = styled.div`
	display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 66px);
    padding-top: 10px;
    font-size: 16px;
`
export const DetailLeft = styled.div`
	flex-shrink: 0;
    width: 680px;
    margin-bottom: 24px;
    margin-right: 10px;
    .articleTitle{
	font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    color: #404040;
    text-rendering: optimizelegibility;
    margin-top: 0;
    margin-bottom: .5em;
    }
`
export const DetailArticle = styled.article`
	font-weight: 400;
    line-height: 1.8;
    margin-bottom: 20px;
    display: block;
    .pic-container{
    width: 100%;
    margin: 0;
    padding-bottom: 25px;
    text-align: center;
    font-size: 0;
    }
    
`
export const DetailRight = styled.div`
	flex-shrink: 0;
    width: 260px;
    background : #eee;
`