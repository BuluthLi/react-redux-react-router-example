import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class History extends Component {
    // constructor(props){
    //     super(props)
    //     console.log(props);
    // }
    onToIndex=()=>{
        // 手动去关于页面
        this.props.history.push('/about');
    }
    render() {
        return (
            <div className="history">
                <button onClick={this.onToIndex}>让我去关于页面</button>
                <h3>我是History</h3>
            </div>
        )
    }
}
export default withRouter(History);