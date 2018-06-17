import React from 'react';
import { Text, TextView, View} from 'react-native';

const Input = ({ label }) => {
    return (
        <View>
            <Text>{label}</Text>
        </View>
    );
};

export { Input };
