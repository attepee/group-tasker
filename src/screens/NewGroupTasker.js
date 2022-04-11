import React, { useState } from 'react';
import { Pressable, Text, TextInput,View } from 'react-native';

import { Styles } from '../Styles';

export function NewGroupTasker({ navigation }) {
    return (
        <View style={Styles.Root}>
            <View style={Styles.Container}>
                <Text style={Styles.InputHeader}>Title</Text>
                <TextInput style={[Styles.Input, Styles.TextInput]} />
                <View style={Styles.ButtonContainer}>
                    <Pressable 
                        style={[Styles.Button, Styles.ButtonHor, Styles.Cancel]}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={Styles.ButtonText}>Cancel</Text>
                    </Pressable>
                    <Pressable
                        style={[Styles.Button, Styles.ButtonHor, Styles.Confirm]}
                        onPress={() => navigation.navigate('Group tasker')}
                    >
                        <Text style={Styles.ButtonText}>Save</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}