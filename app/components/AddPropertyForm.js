import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { Field, actions } from 'react-redux-form'
import counterpart from 'counterpart'
import AutoSuggest from 'react-autosuggest'
import DatePicker from 'react-datepicker'
import InputText from './form/InputText'
import TextArea from './form/TextArea'

class AddPropertyForm extends React.Component {
  handleSubmit() {
    let { property, dispatch } = this.props;

    // Do whatever you like in here.
    // You can use redux simple form actions such as:
    // actions.setPending('user', true);
    // actions.setValidity('user.firstName', user.firstName.length > 0);
    // actions.setSubmitted('user', true);
    // etc.
  }

  onSuggestionsUpdateRequested(object) {
    this.props.dispatch(searchSuburb(object.value))
    // PropertyActions.getSuburbs(object.value)
  }

  onSuggestionSelected(event, object) {
    // TODO: process the value, assign to suburb and postcode
  }

  getSuggestionValue(suggestion) {
    return suggestion.value
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.label}</span>
    )
  }

  render() {
    let { property } = this.props;

    const theme = {
      input: 'form-control',
      suggestionsContainer: 'search-results',
      suggestion: 'search-list-item'
    }

    const inputProps = {
      value: property.suburbSearch,
      onChange: this.onSuburbSearchChange,
      type: 'search',
      placeholder: counterpart('nav.search.placeholder')
    }

    return (
      <div>
        <Navbar pageFlag="addProperty" />
        <div className="container">
          <h2>Add Property</h2>
          <div>The price state is: {property.price}</div>
          <form onSubmit={() => this.handleSubmit()} className="form-horizontal">
            <section className="basic">
              <InputText
                label="Rent per week $"
                model="property.price"
              />
              <InputText
                label="How many weeks bond"
                model="property.bond"
              />

              <Field
                model="property.availableStart"
                updateOn="blur"
              >
                <div className="form-group">
                  <label className="col-sm-3 control-label">Available Date</label>
                  <div className="col-sm-9">
                    <DatePicker
                      className="form-control"
                      selected={this.props.availableStart}
                    />
                  </div>
                </div>
              </Field>

              <InputText
                label="Minimum Terms"
                model="property.minTerm"
              />
            </section>

            <section className="address">
              <Field
                model="property.suburbSearch"
                updateOn="blur"
              >
                <div className="form-group">
                  <label className="col-sm-3 control-label">Suburb or postcode</label>
                  <div className="col-sm-9">
                    <AutoSuggest
                      theme={theme}
                      suggestions={this.props.suburbs}
                      onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                      onSuggestionSelected={this.onSuggestionSelected}
                      getSuggestionValue={this.getSuggestionValue}
                      renderSuggestion={this.renderSuggestion}
                      inputProps={inputProps}
                    />
                  </div>
                </div>
              </Field>

              <InputText
                // TODO: make the address auto suggest and process [lat, lng] with google map
                // and save geocode to DB
                label="Address"
                model="property.address"
              />
            </section>

            <section className="details">
              <InputText
                label="Title"
                model="property.title"
              />

              <TextArea
                label="Details"
                model="property.details"
              />


            </section>
            <section className="contact">
            </section>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { property: state.property };
}

export default connect(mapStateToProps)(AddPropertyForm);
