// 以下所有关于react-router的总结（和=子路由，嵌套路由相关的内容，都是由于exact的关系，path="/solution/one"再针对于没有exact属性的父路由path="/solution"是肯定会匹配到的，再对本身进行exact全匹配，可以实现嵌套路由），
// react-routerV4放弃使用集中路由表，如果使用建议路由平铺书写，不嵌套，结合手动push一个路由进行跳转使用
import React, { Component } from 'react';
import './App.css';
import { NavLink, withRouter } from 'react-router-dom';
import LuYou from './route'
import Left from './left'
import Right from './right'
import History from './history'
import { connect } from 'react-redux'
import { num_add, num_dis } from './redux/action/num-action'

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
};
//将action的所有方法绑定到props上，加上connect就能传递下去
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(num_add(2)),
    decrement: () => dispatch(num_dis(2))
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      count: 0
    }
  }
  onChange = (e) => {
    // e.nativeEvent.stopImmediatePropagation();
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div className="App">
        <p onClick={(e) => this.onChange(e)}>我是app{this.state.count}</p>
        <History></History>
        {/* 此方式只能从"其他"页面跳转过来 */}
        <NavLink to={{ pathname: '/inbox/', query: { day: '首页' } }} >首页</NavLink>
        <NavLink to={{ pathname: "/about", query: { day: 'about' } }}>about</NavLink>
        <NavLink to="/message">message</NavLink>
        <NavLink to="/dashboard" exact>dashboard</NavLink>
        <LuYou></LuYou>
        {/* <div className="left"><Left count={this.props}></Left></div> */}
        <div className="left"><Left></Left></div>
        <div className="right"><Right></Right></div>
      </div>
    );
  }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default withRouter(App);

