import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './style';
import Input from './../../components/inputs/';
import Botao from './../../components/bottons/';

export default function Login() {
    const [isChecked, setChecked] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.largeText}>Save Password</Text>
            <Input  placeholder='User'/>
            <Input  placeholder='Password' />
            <View style={styles.Checkbox}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text style={styles.remenber}>Remember User</Text>
            </View>
            <View>
                <Botao title='Access' classButton='access' classTexto='texto'/>
                <Botao title='Sign Up' classButton='signUp' classTexto='texto'/>
                <Botao title='Forgot password' classButton='signUp' classTexto='forgot'/>
            </View>
        </View>

    );
}