import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import { readEvents } from '../actions'

class EventsInex extends Component {
  componentDidMount() {
    this.props.readEvents() // propsって何？どこからくる？
  }
  renderEvents() {
    return _.map(this.props.events, event => ( // なんで丸括弧なの？
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          { this.renderEvents() }
        </tbody>
      </table>
    )
  }
}
// この辺がよくわからない propsにstateをmapする？
const mapStateToProps = state => ({
  events: state.events
})
// この辺がよくわからない propsにdispatchをmapsする？
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsInex)
