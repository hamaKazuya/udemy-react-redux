import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

import { readEvents } from '../actions'
import { ContentAdd } from 'material-ui/svg-icons';
import { FloatingActionButton } from 'material-ui';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents() // propsって何？どこからくる？
  }
  renderEvents() {
    return _.map(this.props.events, event => ( // なんで丸括弧なの？
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn><Link to={`/events/${event.id}`}>{event.title}</Link></TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }
  render() {
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new"/>}>
          <ContentAdd />
        </FloatingActionButton>

        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            { this.renderEvents() }
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}
// この辺がよくわからない propsにstateをmapする？
const mapStateToProps = state => ({
  events: state.events
})
// この辺がよくわからない propsにdispatchをmapsする？
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
