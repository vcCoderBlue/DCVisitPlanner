import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import API_KEYM from "./config_keys1";

const apiKey = API_KEYM;

const style = {
  width: '100%',
  height: '275px'
}

export class Gmpms extends Component {
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
        lat: 38.9192,
        lng: -77.1008
      }}
      zoom={10}
      onClick={this.onMapClicked}

      >

        <Marker onClick={this.onMarkerClick}
          title={"Tyson's Corner Center"}
          name={"Tyson's Corner Center"}
          label={'5'}
          position={{lat: 38.9178, lng: -77.2225}}
        />

        <Marker onClick={this.onMarkerClick}
            title={'CityCenterDC'}
            name={'CityCenterDC'}
            label={'1'}
            position={{lat: 38.9005, lng: -77.0255}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Fashion Centre at Pentagon City'}
          name={'Fashion Centre at Pentagon City'}
          label={'2'}
          position={{lat: 38.8630, lng: -77.0611}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Georgetown'}
          name={'Georgetown'}
          label={'3'}
          position={{lat: 38.9049, lng: -77.0670}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Mazza Gallerie'}
          name={'Mazza Gallerie'}
          label={'4'}
          position={{lat: 38.9597, lng: -77.0857}}
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
})(Gmpms)
