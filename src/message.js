import React, { Component } from 'react';
class Message extends Component {
    render() {
        console.log('', this.props);

        return <h3>我是Message</h3>
    }
}
export default Message;