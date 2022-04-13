import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Modal, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

import { Styles } from '../Styles';
import { EmptyMsg } from '../components/EmptyMsg';

export function GroupTasker({ navigation, route }) {
    const [groups, setGroups] = useState([]);
    const [currentItemId, setCurrentItemId] = useState();
    const [currentItemTitle, setCurrentItemTitle] = useState();
    const [participantsModalVisible, setParticipantsModalVisible] = useState(false);
    const [tasksModalVisible, setTasksModalVisible] = useState(false);
    const [drawModalVisible, setDrawModalVisible] = useState(false);
    const [groupSize, setGroupSize] = useState(2);
    const [decrementButtonState, setDecrementButtonState] = useState(true);
    const [participants, setParticipants] = useState([]);
    const [participantName, setParticipantName] = useState("");
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState("");

    useEffect(() => {
        setGroups(route.params.groups);
        setCurrentItemId(route.params.currentItemId);
        setCurrentItemTitle(route.params.currentItemTitle);
        setParticipants(route.params.currentItemParticipants);
        setTasks(route.params.currentItemTasks);
    },[]);

    useEffect(() => {
        storeData();
    },[groups]);

    const setStateGroupSize = (value) => {
        if (value <= 2) {
            setDecrementButtonState(true);
            setGroupSize(2);
        }
        else {
            setDecrementButtonState(false);
            setGroupSize(value);
        }
    };

    const setParticipant = () => {
        setParticipants([...participants, {id: uuidv4(), name: participantName}]);
        setParticipantName("");
    };

    const setTask = () => {
        setTasks([...tasks, {id: uuidv4(), title: taskTitle}]);
        setTaskTitle("");
    };

    const removeParticipant = (id) => {
        let array = participants.filter(item => item.id !== id);
        setParticipants(array);
        setParticipantsToGroup();
    };

    const removeTask= (id) => {
        let array = tasks.filter(item => item.id !== id);
        setTasks(array);
        setTasksToGroup();
    }

    const setParticipantsToGroup = () => {
        let group = groups.filter(item => item.id == currentItemId)[0];
        let updatedGroup = {...group, participants: participants};
        groups.splice(groups.findIndex(item => item.id == currentItemId), 1, updatedGroup);
    };

    const setTasksToGroup = () => {
        let group = groups.filter(item => item.id == currentItemId)[0];
        let updatedGroup = {...group, tasks: tasks};
        groups.splice(groups.findIndex(item => item.id == currentItemId), 1, updatedGroup);
    }

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@groups', JSON.stringify(groups));
        }
        catch (e) {
            onsole.log("Something went wrong while saving the groups.");
        }
    };

    return (
        <View style={Styles.Root}>
            <View style={Styles.Container}>
                <Text style={Styles.Header}>{currentItemTitle}</Text>
                <Pressable
                    style={[Styles.Button, Styles.ButtonVert, Styles.Continue]}
                    onPress={() => setParticipantsModalVisible(!participantsModalVisible)}
                >
                    <Text style={Styles.ButtonText}>
                        <Entypo name="users" size={16} color="white" /> Participants
                    </Text>
                </Pressable>
                <Pressable
                    style={[Styles.Button, Styles.ButtonVert, Styles.Continue]}
                    onPress={() => setTasksModalVisible(!tasksModalVisible)}
                >
                    <Text style={Styles.ButtonText}>
                        <Entypo name="list" size={16} color="white" /> Tasks
                        </Text>
                </Pressable>
                <Pressable
                    style={[Styles.Button, Styles.ButtonVert, Styles.Continue]}
                    onPress={() => setDrawModalVisible(!drawModalVisible)}
                >
                    <Text style={Styles.ButtonText}>
                        <Entypo name="shuffle" size={16} color="white" /> Draw
                    </Text>
                </Pressable>
            </View>
            {/* Participants modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={participantsModalVisible}
                onRequestClose={() => {
                    setParticipantsModalVisible(!participantsModalVisible);
                }}
            >
                <View style={Styles.ModalRoot}>
                    <View style={Styles.ModalContainer}>
                        <Text style={Styles.InputHeader}>Add participants</Text>
                        <View style={Styles.ButtonContainer}>
                            <Pressable 
                                style={[Styles.Button, Styles.ButtonHor, Styles.Cancel]}
                                onPress={() => {setParticipantsModalVisible(!participantsModalVisible), setParticipants([])}}
                            >
                                <Text style={Styles.ButtonText}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[Styles.Button, Styles.ButtonHor, Styles.Confirm]}
                                onPress={() => {setParticipantsModalVisible(!participantsModalVisible), setParticipantsToGroup()}}
                            >
                                <Text style={Styles.ButtonText}>Save</Text>
                            </Pressable>
                        </View>
                        <View style={Styles.ItemInputContainer}>
                            <TextInput
                                style={[Styles.Input, Styles.ItemInput]}
                                value={participantName}
                                placeholder="Enter name here"
                                onChangeText={(text) => setParticipantName(text)}
                            />
                            <Pressable
                                style={Styles.ItemInputButton}
                                onPress={() => setParticipant()}
                            >
                                <Entypo name="add-user" size={16} color="white" />
                            </Pressable>
                        </View>
                        {(participants.length < 1) ? EmptyMsg("No participants yet...") :
                            <FlatList
                                style={Styles.FlatList}
                                data={participants}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) =>
                                    <View style={Styles.ItemContainer}>
                                        <Pressable
                                            style={Styles.ItemTitleContainer}
                                            >
                                            <Text style={Styles.ItemTitle}>{item.name}</Text>
                                        </Pressable>
                                        <Pressable
                                            style={Styles.ItemButton}
                                            onPress={() => removeParticipant(item.id)}
                                            >
                                            <Entypo name="cross" size={20} color="white" />
                                        </Pressable>
                                    </View>
                                }
                            />
                        }
                    </View>
                </View>
            </Modal>
            {/* Tasks modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={tasksModalVisible}
                onRequestClose={() => {
                    setTasksModalVisible(!tasksModalVisible);
                }}
            >
                <View style={Styles.ModalRoot}>
                    <View style={Styles.ModalContainer}>
                        <Text style={Styles.InputHeader}>Add tasks</Text>
                        <View style={Styles.ButtonContainer}>
                            <Pressable 
                                style={[Styles.Button, Styles.ButtonHor, Styles.Cancel]}
                                onPress={() => {setTasksModalVisible(!tasksModalVisible), setTasks([])}}
                            >
                                <Text style={Styles.ButtonText}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[Styles.Button, Styles.ButtonHor, Styles.Confirm]}
                                onPress={() => {setTasksModalVisible(!tasksModalVisible), setTasksToGroup()}}
                            >
                                <Text style={Styles.ButtonText}>Save</Text>
                            </Pressable>
                        </View>
                        <View style={Styles.ItemInputContainer}>
                            <TextInput
                                style={[Styles.Input, Styles.ItemInput]}
                                value={taskTitle}
                                placeholder="Enter task here"
                                onChangeText={(text) => setTaskTitle(text)}
                            />
                            <Pressable
                                style={Styles.ItemInputButton}
                                onPress={() => setTask()}
                            >
                                <Entypo name="add-to-list" size={16} color="white" />
                            </Pressable>
                        </View>
                        {(tasks.length < 1) ? EmptyMsg("No tasks yet...") :
                            <FlatList
                                style={Styles.FlatList}
                                data={tasks}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) =>
                                    <View style={Styles.ItemContainer}>
                                        <Pressable
                                            style={Styles.ItemTitleContainer}
                                            >
                                            <Text style={Styles.ItemTitle}>{item.title}</Text>
                                        </Pressable>
                                        <Pressable
                                            style={Styles.ItemButton}
                                            onPress={() => removeTask(item.id)}
                                            >
                                            <Entypo name="cross" size={20} color="white" />
                                        </Pressable>
                                    </View>
                                }
                            />
                        }
                    </View>
                </View>
            </Modal>
            {/* group drawing modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={drawModalVisible}
                onRequestClose={() => {
                    setDrawModalVisible(!drawModalVisible);
                }}
            >
                <View style={Styles.ModalRoot}>
                    <View style={Styles.ModalContainer}>
                        <Text style={Styles.InputHeader}>Group  size</Text>
                        <View style={Styles.NumberInputContainer}>
                            <Pressable
                                disabled={decrementButtonState}
                                style={[Styles.NumberInputButton, Styles.NumberInputButtonLeft]}
                                onPress={() => setStateGroupSize(groupSize - 1)}
                            >
                                <Entypo name="minus" size={24} color="white" />
                            </Pressable>
                            <TextInput
                                style={[Styles.Input, Styles.NumberInput]}
                                keyboardType='numeric'
                                value={groupSize}
                            />
                            <Pressable
                                style={[Styles.NumberInputButton, Styles.NumberInputButtonRight]}
                                onPress={() => setStateGroupSize(groupSize + 1)}
                            >
                                <Entypo name="plus" size={24} color="white" />
                            </Pressable>
                        </View>
                        <View style={Styles.ButtonContainer}>
                            <Pressable 
                                style={[Styles.Button, Styles.ButtonHor, Styles.Cancel]}
                                onPress={() => setDrawModalVisible(!drawModalVisible)}
                            >
                                <Text style={Styles.ButtonText}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[Styles.Button, Styles.ButtonHor, Styles.Confirm]}
                            >
                                <Text style={Styles.ButtonText}>Draw</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}