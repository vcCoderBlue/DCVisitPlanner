import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import API_KEYM from "./config_keys1";

const apiKey = API_KEYM;

const style = {
  width: '100%',
  height: '275px'
}

export class Gmph extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  windowHasOpened =() =>
    this.setState({
      showingInfoWindow: true
    });

  windowHasClosed =() =>
    this.setState({
      showingInfoWindow: false
    });

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: !this.state.showingInfoWindow
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map
      google={this.props.google}
      style={style}
      initialCenter={{
        lat: 38.8959,
        lng: -77.0308
      }}
      zoom={12}
      onClick={this.onMapClicked}

      >

        <Marker onClick={this.onMarkerClick}
          title={'Hotel Lombardy'}
          name={'Hotel Lombardy'}
          label={'1'}
          position={{lat: 38.9015, lng: -77.0459}}
        />

        <Marker onClick={this.onMarkerClick}
            title={'Kimpton Rouge Hotel'}
            name={'Kimpton Rouge Hotel'}
            label={'2'}
            position={{lat: 38.9082 , lng: -77.0362}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Mandarin Oriental'}
          name={'Mandarin Oriental'}
          label={'3'}
          position={{lat: 38.8835, lng: -77.0304}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'The Watergate Hotel'}
          name={'The Watergate Hotel'}
          label={'4'}
          position={{lat: 38.8995, lng: -77.0553}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Washington Plaza Hotel'}
          name={'Washington Plaza Hotel'}
          label={'5'}
          position={{lat: 38.9062, lng: -77.0312}}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          onOpen={this.windowHasOpened}
          onClose={this.windowHasClosed}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
})(Gmph)
