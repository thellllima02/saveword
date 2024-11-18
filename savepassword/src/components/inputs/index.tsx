import { Text, TextInput, TextInputProps, View } from "react-native";
import styles from "./style";
import global from "../../style/global";




type InputProps = TextInputProps & {
    title: string; 
};
export default function Input({ title, ...rest }: InputProps) {
    return (
        
        <View style={styles.container}> 
            <Text style={global.text}>{title}</Text>
            <TextInput style={[styles.input, global.text]} {...rest}/>
        </View>
    );
}