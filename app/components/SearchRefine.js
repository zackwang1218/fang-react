import React from 'react'
import Translate from 'react-translate-component'
import PropertyFeature from './PropertyFeature'
import { Link } from 'react-router'

class SearchRefine extends React.Component {
  render() {
    const propertyFeatures = [
      'furnished',
      'femalePrefer',
      'nonSmoker',
      'petAllowed',
      'billInclude',
      'fastInternet'
    ]
    return (
      <div id="refine">
        <h3><Translate content="search.refine.sort.label" /></h3>
        <ul>
          <li>
            <strong><Translate content="search.refine.sort.photo" /></strong>
          </li>
          <li>
            <a href="/sydney/newest"><Translate content="search.refine.sort.newest" /></a>
          </li>
          <li>
            <a href="/sydney/cheapest"><Translate content="search.refine.sort.cheapest" /></a>
          </li>
          <li>
            <a href="/sydney/dearest"><Translate content="search.refine.sort.dearest" /></a>
          </li>
        </ul>
        <h3><Translate content="search.refine.term.label" /></h3>
        <ul>
          <li>
            <strong><Translate content="search.refine.term.any" /></strong>
          </li>
          <li>
            <a href="/sydney/short-term"><Translate content="search.refine.term.short" /></a>
          </li>
          <li>
            <a href="/sydney/long-term"><Translate content="search.refine.term.long" /></a>
          </li>
        </ul>
        <h3><Translate content="search.refine.room.label" /></h3>
        <ul>
          <li>
            <strong><Translate content="search.refine.room.all" /></strong>
          </li>
          <li>
            <a href="/sydney/private-rooms"><Translate content="search.refine.room.private" /></a>
          </li>
          <li>
            <a href="/sydney/shared-rooms"><Translate content="search.refine.room.shared" /></a>
          </li>
          <li>
            <a href="/sydney/private-rooms"><Translate content="search.refine.room.living" /></a>
          </li>
          <li>
            <a href="/sydney/shared-rooms"><Translate content="search.refine.room.master" /></a>
          </li>
        </ul>
        <h3><Translate content="search.refine.property.label" /></h3>
        <ul>
          <li>
            <strong><Translate content="search.refine.property.all" /></strong>
          </li>
          <li>
            <a href="/share-houses/sydney"><Translate content="search.refine.property.house" /></a>
          </li>
          <li>
            <a href="/flatshares/sydney"><Translate content="search.refine.property.apart" /></a>
          </li>
          <li>
            <a href="/granny-flats/sydney"><Translate content="search.refine.property.studio" /></a>
          </li>
          <li>
            <a href="/studios/sydney"><Translate content="search.refine.property.flat" /></a>
          </li>
        </ul>
        <h3><Translate content="search.refine.feature.label" /></h3>
        <ul>
          <li>
            <strong><Translate content="search.refine.feature.any" /></strong>
          </li>
          <PropertyFeature propertyFeatures={propertyFeatures} selected="any" />
        </ul>
        <a data-closerefine href="#">×</a>
      </div>
    )
  }
}

SearchRefine.propTypes = {
}

export default SearchRefine
