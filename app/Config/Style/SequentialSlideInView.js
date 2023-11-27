import React, { Component } from 'react';
import { Animated, View } from 'react-native';

class SequentialSlideInView extends Component {
    constructor(props) {
        super(props);

        // Her öğe için bir Animated.Value oluşturuluyor
        this.state = {
            slideAnims: props.items.map(() => new Animated.Value(-500))
        };
    }

    componentDidMount() {
        this.slideInAll();
    }

    slideInAll = () => {
        const { slideAnims } = this.state;
        const { delay = 500 } = this.props; // Öğeler arası varsayılan gecikme süresi

        // Her bir öğe için animasyon sırayla başlatılıyor
        slideAnims.forEach((anim, index) => {
            Animated.timing(anim, {
                toValue: 0,
                duration: 1000,
                delay: index * delay, // Her öğe için gecikme süresi ekleniyor
                useNativeDriver: true
            }).start();
        });
    }

    render() {
        const { items, renderChild, delay } = this.props;
        const { slideAnims } = this.state;

        return (
            items.map((item, index) => (
                <Animated.View
                    key={index}
                    style={{
                        transform: [{ translateX: slideAnims[index] }]
                    }}
                >
                    {renderChild(item, index)}
                </Animated.View>
            ))
        );
    }
}


export default SequentialSlideInView;
