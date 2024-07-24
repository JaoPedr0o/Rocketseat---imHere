import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#131016',
      padding: 24,
      flex: 1,
    },
  
    eventName: {
      color: '#fdfcfe',
      fontWeight: 'bold',
      fontSize: 24,
      marginTop: 48,
    },
  
    eventDate: {
      color: '#6b6b6b',
      fontWeight: 'bold',
      fontSize: 16,
    },

    input: {
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        height: 56,
        color: '#fdfcfe',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12,
    },

    buttonTxt: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },

    emptyList: {
      flex: 1,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: '#3167cf',
      borderRadius: 5,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }
  });