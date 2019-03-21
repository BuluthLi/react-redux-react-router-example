import React, { Component } from 'react';
import Dashboard from './dashboard';
import About from './about';
import Inbox from './inbox';
import Message from './message';
import { Route,Redirect } from 'react-router-dom';
class LuYou extends Component {
    render() {
        return (
            <div className="content">
                    <Route path='/inbox' component={Inbox} />
                    <Route path='/about' component={About} />
                    <Route path='/message' component={Message} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Redirect to="/dashboard" component={Dashboard}/>
            </div>
        );
    }
}

export default LuYou;