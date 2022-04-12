import * as React from 'react';
import { Text, View } from 'react-native';

export function EmptyMsg(msg) {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{color: '#333', fontSize: 24, textAlign: 'center', padding: 20}}>{msg}</Text>
        </View>
    );
}
