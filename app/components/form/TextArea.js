import React from 'react'
import { Field, actions } from 'react-redux-form'

class TextArea extends React.Component {
  render() {
    return (
      <Field
        model={this.props.model}
        updateOn="blur"
      >
        <div className="form-group">
          <label className="col-sm-3 control-label">{this.props.label}</label>
          <div className="col-sm-9">
            <textarea
              rows="4"
              className="form-control"
            />
          </div>
        </div>
      </Field>
    )
  }
}

TextArea.propTypes = {
  label: React.PropTypes.string,
  model: React.PropTypes.string
}

export default TextArea
