import React, { useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Styles } from '../Styles';

export function GroupTasker({ navigation }) {
    const [participantsModalVisible, setParticipantsModalVisible] = useState(false);
    const [tasksModalVisible, setTasksModalVisible] = useState(false);
    const [drawModalVisible, setDrawModalVisible] = useState(false);
    const [groupSize, setGroupSize] = useState(2);
    const [decrementButtonState, setDecrementButtonState] = useState(true);

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

    return (
        <View style={Styles.Root}>
            <View style={Styles.Container}>
                <Text style={Styles.InputHeader}>Group title here</Text>
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
                                onPress={() => setParticipantsModalVisible(!participantsModalVisible)}
                            >
                                <Text style={Styles.ButtonText}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[Styles.Button, Styles.ButtonHor, Styles.Confirm]}
                            >
                                <Text style={Styles.ButtonText}>Save</Text>
                            </Pressable>
                        </View>
                        <View style={Styles.ItemInputContainer}>
                            <TextInput
                                style={[Styles.Input, Styles.ItemInput]}
                            />
                            <Pressable style={Styles.ItemInputButton}>
                                <Entypo name="add-user" size={16} color="white" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

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
                                onPress={() => setTasksModalVisible(!tasksModalVisible)}
                            >
                                <Text style={Styles.ButtonText}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[Styles.Button, Styles.ButtonHor, Styles.Confirm]}
                            >
                                <Text style={Styles.ButtonText}>Save</Text>
                            </Pressable>
                        </View>
                        <View style={Styles.ItemInputContainer}>
                            <TextInput
                                style={[Styles.Input, Styles.ItemInput]}
                            />
                            <Pressable style={Styles.ItemInputButton}>
                                <Entypo name="add-to-list" size={16} color="white" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

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