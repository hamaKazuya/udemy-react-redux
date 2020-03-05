import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this) // bindしないといけないらしい。まじで？めんどくさ
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error }} = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }
  render() {
    console.log('new')
    const { handleSubmit, submitting, pristine, invalid } = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        <div><Field label="Title" name="title" type="text" component={ this.renderField } /></div>
        <div><Field label="Body" name="body" type="text" component={ this.renderField } />
        </div>

        <div>
          {/* pristine: 空だとfalse, submitting: その名の通り */}
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}
const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title."
  if (!values.body) errors.body = "Enter a body."
  // FIXME: [Warning]Cannot update a component from inside the function body of a different component.
  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
