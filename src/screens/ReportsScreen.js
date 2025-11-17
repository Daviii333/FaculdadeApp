import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/reportsStyles';

export default function ReportsScreen() {
  const navigation = useNavigation();
  const [period, setPeriod] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  function handleGenerate() {
    // Protótipo: só mostra dados estáticos
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Relatórios Gerenciais</Text>
          <Text style={styles.headerSubtitle}>
            Filtros para análise de promoções cadastradas.
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Período</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 01/01/2025 a 31/12/2025"
          value={period}
          onChangeText={setPeriod}
        />

        <Text style={styles.label}>Tipo de promoção</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Sorteio, Cashback, Desconto"
          value={type}
          onChangeText={setType}
        />

        <Text style={styles.label}>Status</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Aprovada, Em análise, Indeferida"
          value={status}
          onChangeText={setStatus}
        />

        <TouchableOpacity style={styles.button} onPress={handleGenerate}>
          <Text style={styles.buttonText}>Gerar relatório (protótipo)</Text>
        </TouchableOpacity>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Resumo Simulado</Text>
          <Text style={styles.summaryText}>Promoções cadastradas: 120</Text>
          <Text style={styles.summaryText}>Aprovadas: 80</Text>
          <Text style={styles.summaryText}>Em análise: 30</Text>
          <Text style={styles.summaryText}>Indeferidas: 10</Text>
        </View>

        <Text style={styles.exportText}>
          Exportação em PDF, Excel e CSV será realizada no sistema oficial.
          Aqui, o foco é demonstrar o fluxo de uso.
        </Text>
      </ScrollView>
    </View>
  );
}
