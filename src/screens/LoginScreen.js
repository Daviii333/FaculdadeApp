import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!email || !password) {
      Alert.alert('Atenção', 'Preencha e-mail e senha para continuar.');
      return;
    }

    // Aqui seria a chamada de API no futuro.
    // Como é só protótipo, vamos só simular o login:
    navigation.replace('Solicitations');
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
          onPress={() => Alert.alert('Protótipo', 'Funcionalidade não implementada.')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3057', // azul mais institucional
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  appSubtitle: {
    color: '#C9D6FF',
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#14274E',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#111827',
  },
  button: {
    backgroundColor: '#1F6FEB',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  linkButton: {
    marginTop: 12,
    alignItems: 'center',
  },
  linkText: {
    color: '#1F6FEB',
    fontSize: 13,
  },
  footerText: {
    marginTop: 24,
    color: '#E5E7EB',
    fontSize: 11,
    textAlign: 'center',
  },
});
