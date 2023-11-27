import React, { Component } from 'react';
import { Animated, View } from 'react-native';

class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0), // Başlangıçta opaklık 0
  }

  componentDidMount() {
    Animated.timing(                  // Zamanlamalı animasyon
      this.state.fadeAnim,            // Animasyon etkileyeceği değişken
      {
        toValue: 1,                   // Son opaklık değeri 1
        duration: 1000,               // 2000 milisaniyede animasyon tamamlanır
        useNativeDriver: true,        // Performansı artırmak için native driver kullanımı
      }
    ).start();                        // Animasyonu başlat
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Animated.View kullanılıyor
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Opaklık animasyonu uygulanıyor
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeInView;
