import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    // Root
    Root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    // Container
    Container: {
        width: ((width < 768) ? '90%' : '30%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    // Inputs
    Input: {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#333',
        padding: 10
    },
    InputHeader: {
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    TextInput: {
        width: '100%',
        borderRadius: 5,
        margin: 10
    },
    NumberInputContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'center',
        margin: 10
    },
    NumberInputButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        backgroundColor: '#333',
        fontWeight: 'bold',
        color: '#fff'
    },
    NumberInputButtonLeft: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    NumberInputButtonRight: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    NumberInput: {
        width: '60%'
    },
    ItemInputContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'center',
        margin: 10
    },
    ItemInput: {
        width: '80%'
    },
    ItemInputButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        backgroundColor: '#333',
        fontWeight: 'bold',
        color: '#fff',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    //Buttons
    ButtonContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 10
    },
    Button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        alignItems: 'center',
    },
    ButtonHor: {
        width: '48%',
    },
    ButtonVert: {
        width: '100%',
        marginBottom: 10
    },
    Confirm: {
        backgroundColor: '#4EDA25'
    },
    Cancel: {
        backgroundColor: '#DA5625'
    },
    Continue: {
        backgroundColor: '#25A9DA'
    },
    ButtonText: {
        fontSize: 16,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#fff'
    },
    // Modal
    ModalRoot: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    ModalContainer: {
        width: ((width < 768) ? '90%' : '30%'),
        alignItems: 'center',
        justifyContent: 'center',
    }
});