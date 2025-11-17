import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/publicDataStyles';

export default function PublicDataScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Dados Públicos</Text>
          <Text style={styles.headerSubtitle}>
            Painéis estatísticos e dados abertos sobre promoções comerciais.
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Visão geral</Text>
          <Text style={styles.cardText}>Promoções registradas em 2025: 1.240</Text>
          <Text style={styles.cardText}>Empresas participantes: 320</Text>
          <Text style={styles.cardText}>Volume médio por mês: 100 promoções</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Distribuição por tipo</Text>
          <Text style={styles.cardText}>Sorteios: 45%</Text>
          <Text style={styles.cardText}>Cashback: 30%</Text>
          <Text style={styles.cardText}>Descontos: 25%</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Transparência</Text>
          <Text style={styles.cardText}>
            Os dados apresentados aqui são fictícios e ilustram como a sociedade civil
            pode acompanhar a atuação do Ministério da Fazenda na regulação das
            promoções comerciais.
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Exportar dados abertos (protótipo)</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
