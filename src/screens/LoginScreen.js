 import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/loginStyles';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!email || !password) {
      Alert.alert('Atenção', 'Preencha e-mail e senha para continuar.');
      return;
    }

    // Protótipo: após login, vai para o menu com todos os casos de uso
    navigation.replace('MainMenu');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.appTitle}>Promoções Comerciais</Text>
        <Text style={styles.appSubtitle}>Ministério da Fazenda</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Acesso da Empresa</Text>
        <Text style={styles.description}>
          Entre com seu e-mail corporativo para acompanhar as solicitações de
          promoções comerciais.
        </Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="exemplo@empresa.com.br"
          placeholderTextColor="#9FA5C0"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#9FA5C0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() =>
            Alert.alert('Protótipo', 'Funcionalidade não implementada.')
          }
        >
          <Text style={styles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Protótipo acadêmico · Integração com Ministério da Fazenda (conceitual)
      </Text>
    </KeyboardAvoidingView>
  );
}



