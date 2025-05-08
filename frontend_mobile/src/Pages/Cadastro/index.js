import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const navigation = useNavigation();
    const { width } = useWindowDimensions();

    async function SignUp() {
        if (password === confirmPassword) {
            try {
                console.log("As senhas são iguais")
                const response = await axios.post('http://localhost:5000/signup', {
                    email: email,
                    senha: password
                });

                console.log(response.data);

                if (response.data.success === true) {
                    // AsyncStorage.setItem('token', response.data.token);
                    navigation.navigate('Home');
                } else {
                    setShowEmailError(true);
                }
            } catch (error) {
                console.error(error);
                setShowEmailError(true);
            }
        } else {
            setShowPasswordError(true);
        }
    }

    // Responsive width for form
    const formWidth = width < 480 ? '80%' : '30%';

    return (
        <View style={styles.secao}>
            <Text style={styles.title}>CADASTRO</Text>
            <View style={[styles.cadastro, { width: formWidth }]}>
                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                    style={styles.inputLogin}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.inputLogin}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />

                <Text style={styles.label}>Confirme sua senha:</Text>
                <TextInput
                    style={styles.inputLogin}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Já tenho conta</Text>
                </TouchableOpacity>

                {showPasswordError && (
                    <Text style={styles.errorText}>As senhas devem ser iguais!</Text>
                )}
                {showEmailError && (
                    <Text style={styles.errorText}>Já existe uma conta com esse e-mail!</Text>
                )}

                <TouchableOpacity style={styles.go} onPress={SignUp}>
                    <Text style={styles.goText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    secao: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        fontFamily: 'Arial',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    cadastro: {
        backgroundColor: '#A2D4DD',
        padding: '5%',
        borderRadius: 8,
        color: '#000',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
    },
    inputLogin: {
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 0,
        borderRadius: 5,
        width: '100%',
        marginBottom: '5%',
        paddingHorizontal: 10,
    },
    link: {
        color: '#000',
        textDecorationLine: 'none',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        display: 'flex',
    },
    go: {
        backgroundColor: '#5CBBCC',
        width: '100%',
        height: 50, 
        borderWidth: 0,
        borderRadius: 8, // .5rem
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
    },
    goText: {
        fontWeight: '600',
        color: '#000',
        fontSize: 18, // large
    },
});

export default Cadastro;