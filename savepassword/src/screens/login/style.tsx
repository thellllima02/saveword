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
        }

});

export default styles;