import React,{PureComponent,Fragment} from 'react';
import {GlobalStyled} from './style.js'; 
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './common/header/index'
import Home from './common/pages/home'
import Detail from './common/pages/detail/loadable.js'
import Login from './common/pages/login/'
import Writer from './common/pages/writer'
import store from './store/index'

class App extends PureComponent {
  render(){
     return (
        <Fragment>
          <GlobalStyled></GlobalStyled>
            <Provider store = {store}> {/*将所有组件都与store相连接*/}
              <BrowserRouter> {/*路由*/}
                <Header/>
                <Route path = '/' exact component ={Home}></Route>
                <Route path = '/detail' exact component = {Detail}></Route>
                <Route path = '/login' exact component = {Login}></Route>                
                <Route path = '/writer'exact component = {Writer}></Route>
              </BrowserRouter>
            </Provider>
        </Fragment>        
      )
    }
}

export default App;
