import { StyleSheet } from "react-native";

const styles = StyleSheet.create({  
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        largeText: {
            fontSize: 46, // Aumente este valor para um texto maior
            fontWeight: 'bold', // Opcional: torna o texto em negrito
            color: '#333', // Opcional: altera a cor do texto
           
        },
        remenber:{
            fontSize: 20,
            marginLeft: 5  
        },
        Checkbox: {
            marginTop: 50,
            flexDirection: 'row',
            marginRight: 130
        },passwordContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingHorizontal: 10,
            marginTop: 10,
        },
        passwordInput: {
            flex: 1,
            paddingVertical: 10,
        },
        eyeIcon: {
            padding: 10,
        },
        errorText: {
            color: 'red',
            fontSize: 14,
            marginTop: 5,
        }
        

});

export default styles;