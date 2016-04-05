import React from 'react'
import { Field, actions } from 'react-redux-form'

class InputText extends React.Component {
  render() {
    return (
      <Field
        model={this.props.model}
        updateOn="blur"
      >
        <div className="form-group">
          <label className="col-sm-3 control-label">{this.props.label}</label>
          <div className="col-sm-9">
            <input type="text"
              className="form-control"
            />
          </div>
        </div>
      </Field>
    )
  }
}

InputText.propTypes = {
  label: React.PropTypes.string,
  model: React.PropTypes.string
}

export default InputText
