import React, { Component } from 'react';
import { Animated } from 'react-native';

class SlideInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim: new Animated.Value(-50), 
    };
  }

  componentDidMount() {
    this.slideIn();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trigger !== this.props.trigger) {
      this.resetAnimation();
      this.slideIn();
    }
  }

  resetAnimation = () => {
    this.state.slideAnim.setValue(-50);
  }

  slideIn = () => {
    Animated.timing(
      this.state.slideAnim,
      {
        toValue: 0, 
        duration: 500, 
        useNativeDriver: true 
      }
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          transform: [{ translateX: this.state.slideAnim }] 
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default SlideInView;
