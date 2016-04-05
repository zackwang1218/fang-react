import { handleActions } from 'redux-actions'
import request from 'superagent'

const initialState = {
  search: '',
  suburbs: [{
    suburb: '',
    postcode: '',
    state: ''
  }]
};

function getSuburbs(suburb) {
  if (suburb.length > 2) {
    request.get('/api/suburb/')
      .query({ suburb })
      .end((err, res) => {
        if (err) {

        } else {

        }
      })
  }
}

export default handleActions({
  'search suburb' (state, action) {
    return {

    }
  }
}, initialState)
