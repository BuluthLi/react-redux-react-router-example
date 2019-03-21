// 将store的数据、一些函数名和组件app挂着，app的props就会有store的值
import { connect } from 'react-redux'
import App from '../App';
import { num_add, num_dis } from './action/num-action'
// withRouter的作用是数据在redux更改之后，防止组件不更新的问题
import { withRouter } from 'react-router-dom';

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

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// 挂哪个组件，那个组件的props值就能接收到store的值
// 数据变动，更新组件
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));