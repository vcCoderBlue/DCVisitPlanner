import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import API_KEYM from "./config_keys1";

const apiKey = API_KEYM;

const style = {
  width: '100%',
  height: '275px'
}

export class Gmpm extends Component {
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
          title={'Arlington National Cemetary'}
          name={'Arlington National Cemetary'}
          label={'1'}
          position={{lat: 38.8783, lng: -77.0687}}
        />

        <Marker onClick={this.onMarkerClick}
            title={'National Museum of African American History and Culture'}
            name={'National Museum of African American History and Culture'}
            label={'3'}
            position={{lat: 38.8911 , lng: -77.0326}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'International Spy Museum'}
          name={'International Spy Museum'}
          label={'2'}
          position={{lat: 38.8969, lng: -77.0236}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'National WWII Memorial'}
          name={'National WWII Memorial'}
          label={'4'}
          position={{lat: 38.8894, lng: -77.0405}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'United States Holocaust Memorial Museum'}
          name={'United States Holocaust Memorial Museum'}
          label={'5'}
          position={{lat: 38.8867, lng: -77.0326}}
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
})(Gmpm)
