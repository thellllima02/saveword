import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons'; // Ícone de olho para senha
import styles from './style';
import Input from './../../components/inputs/';
import Botao from './../../components/bottons/';

export default function Login() {
    const [isChecked, setChecked] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const validateAndLogin = () => {
        if (user.trim() === '' || password.trim() === '') {
            setError('Usuário e senha são obrigatórios.');
            return;
        }
        if (password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        setError('');
        alert('Login realizado com sucesso!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.largeText}>Save Password</Text>

            {/* Campo de usuário */}
            <Input 
                placeholder='User'
                value={user}
                onChangeText={setUser}
            />

            {/* Campo de senha com ícone de olho */}
            <View style={styles.passwordContainer}>
                <Input
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!passwordVisible} // Ativando a máscara
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
                    <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                </TouchableOpacity>
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.Checkbox}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text style={styles.remenber}>Remember User</Text>
            </View>

            <View>
                <Botao title='Access' classButton='access' classTexto='texto' onPress={validateAndLogin}/>
                <Botao title='Sign Up' classButton='signUp' classTexto='texto'/>
                <Botao title='Forgot password' classButton='signUp' classTexto='forgot'/>
            </View>
        </View>
    );
}
