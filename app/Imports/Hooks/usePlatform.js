import React , { useState , useEffect } from 'react';
import { Platform } from 'react-native';

export default usePlatform = () => {
    const [platform, setPlatform] = useState(null);

    useEffect(() => {
        if (Platform.OS === 'ios') {
            setPlatform('ios');
        } else {
            setPlatform('android');
        }
    }, []);

    return platform;
}