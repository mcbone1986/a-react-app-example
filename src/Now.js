import React, { Component } from 'react'
import moment from 'moment';

export default class Now extends Component {
    render() {
        return (
            <div>
                 <header className="App-header">
                     Now
                 {/* {moment().format('MMMM Do YYYY, hh:mm:ss a')} */}
                 </header>
            </div>
        )
    }
}
