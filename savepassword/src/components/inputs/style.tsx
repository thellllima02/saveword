import { StyleSheet,  } from "react-native";
import { theme } from "../../../theme";


// Define os estilos usando StyleSheet.create
const styles = StyleSheet.create({
    
    // Estilo para o contêiner do campo de entrada
    container: {
        flexDirection: 'column',                 // Define o layout flexível
        paddingHorizontal: 30,              // Espaçamento interno nas laterais
        width: '100%',                      // Largura total do contêiner
        height: 60,                         // Altura fixa do contêiner
        alignItems: 'flex-start',           // Alinha itens ao início horizontalmente
        justifyContent: 'flex-start',       // Alinha itens ao início verticalmente
    },

    // Estilo para o campo de entrada de texto
    input: {
        width: '100%',                      // Largura total do campo de entrada
        height: 45,                         // Altura fixa do campo de entrada
        marginVertical: 10,                 // Margem vertical para separar do texto ou outros elementos
        borderWidth: 2,                     // Borda ao redor do campo de entrada
        paddingHorizontal: 15,              // Espaçamento interno nas laterais
        borderRadius: 12,                   // Bordas arredondadas para uma aparência suave
        backgroundColor: theme.light.backgroundInputs, // Cor de fundo do campo, definida pelo tema
        borderColor: theme.light.placeholder,          // Cor da borda, usando a cor de placeholder do tema
        
    },
});

export default styles;