import React from 'react'
import { MAP_SETTINGS } from '../../constants/mapSettings'
import mapStyles from '../../styles/mapStyles.json'

import {
  Marker,
  GoogleMap,
  // InfoWindow,
  withScriptjs,
  withGoogleMap,
  // DirectionsRenderer,
} from 'react-google-maps'

const {
  MARKER_SIZE,
  DEFAULT_ZOOM,
  DEFAULT_CENTER,
  DEFAULT_MAP_OPTIONS,
  // PIXEL_OFFSET,
  // DIRECTIONS_OPTIONS,
} = MAP_SETTINGS

const MapContainer = ({ origins, destinations }) => {
  const mapRef = React.useRef(null)

  React.useEffect(() => {
    const bounds = new window.google.maps.LatLngBounds()
    origins.forEach(({ coordinates: { lat, lon } }) => {
      bounds.extend(new window.google.maps.LatLng(lat, lon))
    })
    destinations.forEach(({ coordinates: { lat, lon } }) => {
      bounds.extend(new window.google.maps.LatLng(lat, lon))
    })
    mapRef.current.fitBounds(bounds)
  }, [destinations, origins])

  return (
    <GoogleMap
      ref={mapRef}
      defaultZoom={DEFAULT_ZOOM}
      defaultCenter={DEFAULT_CENTER}
      defaultOptions={{ ...DEFAULT_MAP_OPTIONS, styles: mapStyles }}
    >
      {origins.map(({ coordinates: { lat, lon: lng }, id }) => (
        <Marker
          key={id}
          position={{ lat, lng }}
          icon={{
            url: 'locationIconActive',
            scaledSize: new window.google.maps.Size(MARKER_SIZE, MARKER_SIZE),
          }}
        />
      ))}
      {destinations.map(({ coordinates: { lat, lon: lng }, id }) => (
        <Marker
          key={id}
          position={{ lat, lng }}
          icon={{
            url: 'heartIcon',
            scaledSize: new window.google.maps.Size(MARKER_SIZE, MARKER_SIZE),
          }}
        />
      ))}
    </GoogleMap>
  )
}

export default MapContainer
