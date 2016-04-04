import React from 'react'
import { Link } from 'react-router'
import PropertyFeature from './PropertyFeature'
import Translate from 'react-translate-component'

class PropertyList extends React.Component {

  render() {
    var property = this.props.property
    var cover = property.photos.length > 0 ?
      property.photos[0] : '/img/grid-offer.jpg'
    return (
      <li className="list-offer" id={property._id}>
        <Link to={`/property/${property._id}`}>
          <span>
            <img src={cover} alt={property.details} />
            <div className="type-container">
              <div className="estate-type">
                <Translate content={`search.refine.property.${property.propertyType}`} />
              </div>
            </div>
          </span>
          <div>
            <h2>{property.suburb}</h2>
            <h3>${property.price}</h3>
            <h4>{property.address}</h4>
            <p>{property.details}</p>
            <PropertyFeature propertyFeatures={property.propertyFeature} key={property._id} />
          </div>
        </Link>
      </li>
    )
  }
}

PropertyList.propTypes = {
  property: React.PropTypes.object
}

export default PropertyList
