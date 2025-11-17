import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MOCK_SOLICITATIONS = [
  {
    id: '1',
    title: 'Promoção Dia das Mães 2025',
    status: 'Em análise',
    protocol: 'PROC-2025-000123',
  },
  {
    id: '2',
    title: 'Campanha Cashback Inverno',
    status: 'Aprovada',
    protocol: 'PROC-2025-000087',
  },
  {
    id: '3',
    title: 'Sorteio Aniversário da Loja',
    status: 'Pendente de ajustes',
    protocol: 'PROC-2025-000145',
  },
];

function getStatusColor(status) {
  switch (status) {
    case 'Aprovada':
      return '#16A34A';
    case 'Pendente de ajustes':
      return '#F59E0B';
    case 'Em análise':
    default:
      return '#2563EB';
  }
}

export default function SolicitationListScreen() {
  const navigation = useNavigation();

  function handleLogout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F3057" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Minhas Solicitações</Text>
          <Text style={styles.headerSubtitle}>
            Acompanhe o status das promoções comerciais enviadas.
          </Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de solicitações */}
      <FlatList
        data={MOCK_SOLICITATIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardProtocol}>{item.protocol}</Text>

            <View style={styles.cardFooter}>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(item.status) + '22' },
                ]}
              >
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: getStatusColor(item.status) },
                  ]}
                />
                <Text
                  style={[
                    styles.statusText,
                    { color: getStatusColor(item.status) },
                  ]}
                >
                  {item.status}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {}}
              >
                <Text style={styles.detailsText}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

