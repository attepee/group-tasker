import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Styles } from '../Styles';

export function HomeScreen({ navigation }) {
    return (
        <View style={Styles.Root}>
            <View style={Styles.Container}>
                <Pressable
                    style={[Styles.Button, Styles.ButtonVert, Styles.Continue]}
                    onPress={() => navigation.navigate('New group tasker')}
                >
                    <Text style={Styles.ButtonText}>
                        <Entypo name="add-user" size={16} color="white" /> New group tasker
                    </Text>
                </Pressable>
                <Pressable
                    style={[Styles.Button, Styles.ButtonVert, Styles.Continue]}
                    onPress={() => navigation.navigate('Group taskers')}
                >
                    <Text style={Styles.ButtonText}>
                        <Entypo name="users" size={16} color="white" /> Group taskers
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}