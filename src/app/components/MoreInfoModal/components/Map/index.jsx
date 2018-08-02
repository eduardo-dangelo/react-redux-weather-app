import React from 'react'

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

class Map extends React.Component {
  render() {
    return(
      <div>
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={ "/path/to/your/topojson-map-file.json or geography object" }>
              {(geographies, projection) => geographies.map(geography => (
                <Geography
                  key={ geography.id }
                  geography={ geography }
                  projection={ projection }
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={ "/path/to/your/topojson-map-file.json or geography object" }>
              {(geographies, projection) => geographies.map(geography => (
                <Geography key={ geography.id } geography={ geography } projection={ projection } />
              ))}
            </Geographies>
            <Markers>
              <Marker />
            </Markers>
            <Lines>
              <Line />
            </Lines>
            <Annotation />
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default Map