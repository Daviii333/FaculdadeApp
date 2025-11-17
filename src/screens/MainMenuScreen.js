import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/mainMenuStyles';

export default function MainMenuScreen() {
  const navigation = useNavigation();

  function handleLogout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Menu Principal</Text>
          <Text style={styles.headerSubtitle}>
            Sistema de Promoções Comerciais.
          </Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Empresa Solicitante</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('PromotionForm')}
        >
          <Text style={styles.cardTitle}>Cadastrar Promoção</Text>
          <Text style={styles.cardText}>
            Preenchimento do formulário eletrônico e envio de documentos para análise.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Solicitations')}
        >
          <Text style={styles.cardTitle}>Acompanhar Solicitações</Text>
          <Text style={styles.cardText}>
            Visão geral das promoções cadastradas e status em tempo real.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Reports')}
        >
          <Text style={styles.cardTitle}>Relatórios Gerenciais</Text>
          <Text style={styles.cardText}>
            Filtros por período, tipo de promoção e status para gerar relatórios.
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Gestor Interno</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ManagerDecision')}
        >
          <Text style={styles.cardTitle}>Analisar e Decidir Solicitações</Text>
          <Text style={styles.cardText}>
            Lista de solicitações pendentes para aprovar, indeferir ou solicitar ajustes.
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Sociedade Civil / Pesquisadores</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('PublicData')}
        >
          <Text style={styles.cardTitle}>Consultar Dados Públicos</Text>
          <Text style={styles.cardText}>
            Painéis estatísticos e exportação de dados abertos.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
