import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { icons } from '../constants';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: undefined
    };
  }
  componentDidCatch() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location2 => {
        this.setState({ location: location2 })
        console.log(location2);
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }
  render() {
    const  location  = this.state
    return (
      <View style={{
        flex: 1
      }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            key={1}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
           image={icons.down}
          />
        </MapView>
      </View>
    );
  }
}
