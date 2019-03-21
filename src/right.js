import React, { Component } from 'react';
import { connect } from 'react-redux'
import { num_add, num_dis } from './redux/action/num-action'
class Right extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    // handleClick() {
    //     console.log('我懂了');
    //     store.dispatch(num_add(2));
    // }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>{this.props.count.count}</div>
                <div onClick={this.props.decrement}>我是右边，我要减</div>
            </div>
        )
    }
}
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
export default connect(mapStateToProps, mapDispatchToProps)(Right);