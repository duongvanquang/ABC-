import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import GetLocation, { Location } from 'react-native-get-location'
import { Marker } from 'react-native-svg';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Location: undefined
    };
  }
  componentDidMount() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        this.setState({ Location: location })
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
          coordinate={{ latitude : Location.latitude , longitude : Location.longitude }}
          image={{uri: 'custom_pin'}}
          />
        </MapView>
      </View>
    );
  }
}
