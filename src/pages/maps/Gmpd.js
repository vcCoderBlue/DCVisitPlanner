import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import API_KEYM from "./config_keys1";

const apiKey = API_KEYM;

const style = {
  width: '100%',
  height: '275px'
}

export class Gmpd extends Component {
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
        lat: 38.9145,
        lng: -77.0218
      }}
      zoom={11}
      onClick={this.onMapClicked}

      >

        <Marker onClick={this.onMarkerClick}
          title={'Beefsteak: 22nd St'}
          name={'Beefsteak: 22nd St'}
          label={'1'}
          position={{lat: 38.899920, lng: -77.049430}}
        />

        <Marker onClick={this.onMarkerClick}
            title={'Beefsteak: Wisc Ave'}
            name={'Beefsteak: Wisc Ave'}
            label={'1'}
            position={{lat: 38.948805, lng: -77.079693}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Beefsteak: Conn Ave'}
          name={'Beefsteak: Conn Ave'}
          label={'1'}
          position={{lat: 38.910764, lng: -77.044427}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Chix: 14th St NW'}
          name={'Chix: 14th St NW'}
          label={'2'}
          position={{lat: 38.904533, lng: -77.031574}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Chix: Half St SE'}
          name={'Chix: Half St SE'}
          label={'2'}
          position={{lat: 38.876282, lng: -77.007260}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'District Taco: Tenleytown'}
          name={'District Taco: Tenleytown'}
          label={'3'}
          position={{lat: 38.949947, lng: -77.080864}}
        />

        <Marker onClick={this.onMarkerClick}
            title={'District Taco: Dupont'}
            name={'District Taco: Dupont'}
            label={'3'}
            position={{lat: 38.906026, lng: -77.044483}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'District Taco: Eastern Market'}
          name={'District Taco: Eastern Market'}
          label={'3'}
          position={{lat: 38.885242, lng: -76.996720}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'District Taco: Metro Center'}
          name={'District Taco: Metro Center'}
          label={'3'}
          position={{lat: 38.897597, lng: -77.030156}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'The Hamilton'}
          name={'The Hamilton'}
          label={'4'}
          position={{lat: 38.897655, lng: -77.032274}}
        />

        <Marker onClick={this.onMarkerClick}
          title={'Union Market'}
          name={'Union Market'}
          label={'5'}
          position={{lat: 38.9087, lng: -76.9980}}
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
})(Gmpd)
