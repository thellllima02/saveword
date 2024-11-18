import React from 'react';
import { Text, TouchableOpacity, PressableProps, View } from "react-native";
import styles from './style'; 

type StyleKeys = 'access' | 'signUp' | 'warning';
type TextKeys = 'texto' | 'forgot';

type ButtonProps = PressableProps & {
    title: string;
    classButton: StyleKeys;
    classTexto: TextKeys;
};

function Botao({ title, classButton, classTexto, ...rest }: ButtonProps) {
    return (
        <View>
            <TouchableOpacity style={[styles[classButton], styles.botao]} {...rest}>
                <Text style={styles[classTexto]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Botao;