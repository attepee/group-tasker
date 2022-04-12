import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Modal, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

import { Styles } from '../Styles';
import { EmptyMsg } from '../components/EmptyMsg';

export function HomeScreen({ navigation }) {
    const [groups, setGroups] = useState([]);
    const [groupTitle, setGroupTitle] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getData();
    },[]);

    useEffect(() => {
        storeData();
    },[groups]);

    const setGroup = () => {
        setGroups([...groups, {id: uuidv4(), title: groupTitle}]);
        storeData();
        setModalVisible(!modalVisible);
    };

    const removeGroup = (id) => {
        let array = groups.filter(item => item.id !== id);
        setGroups(array);
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@groups')
            if(value !== null) setGroups(JSON.parse(value));
        }
        catch(e) {
            console.log("Something went wrong while loading groups.");
        }
    }

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@groups', JSON.stringify(groups));
        }
        catch (e) {
            onsole.log("Something went wrong while saving the groups.");
        }
    }

    return (
        <View style={Styles.Root}>
            <View style={Styles.Container}>
                <Pressable
                    style={[Styles.Button, Styles.ButtonVert, Styles.Continue]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={Styles.ButtonText}>
                        <Entypo name="users" size={16} color="white" /> New
                    </Text>
                </Pressable>
                {(groups.length < 1) ? EmptyMsg("No groups yet...") :
                    <FlatList
                        style={Styles.FlatList}
                        data={groups}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <View style={Styles.ItemContainer}>
                                <Pressable
                                    style={Styles.ItemTitleContainer}
                                    onPress={() => navigation.navigate("Group tasker")}>
                                    <Text style={Styles.ItemTitle}>{item.title}</Text>
                                </Pressable>
                                <Pressable
                                    style={Styles.ItemButton}
                                    onPress={() => removeGroup(item.id)}>
                                    <Entypo name="cross" size={20} color="white" />
                                </Pressable>
                            </View>
                        }
                    />
                }
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={Styles.ModalRoot}>
                    <View style={Styles.ModalContainer}>
                        <Text style={Styles.InputHeader}>Group Tasker title</Text>
                        <TextInput
                            style={[Styles.Input, Styles.TextInput]}
                            placeholder="Enter title here"
                            onChangeText={(text) => setGroupTitle(text)} />
                        <View style={Styles.ButtonContainer}>
                            <Pressable 
                                style={[Styles.Button, Styles.ButtonHor, Styles.Cancel]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={Styles.ButtonText}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[Styles.Button, Styles.ButtonHor, Styles.Confirm]}
                                onPress={() => setGroup()}
                            >
                                <Text style={Styles.ButtonText}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}