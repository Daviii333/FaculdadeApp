import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/managerDecisionStyles';

const PENDING = [
  {
    id: '1',
    company: 'Loja Exemplo S.A.',
    title: 'Promoção Dia das Mães 2025',
    protocol: 'PROC-2025-000123',
  },
  {
    id: '2',
    company: 'Supermercado Bom Preço',
    title: 'Sorteio Carrinho de Compras',
    protocol: 'PROC-2025-000140',
  },
];

export default function ManagerDecisionScreen() {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);

  function handleDecision(type) {
    if (!selectedId) {
      Alert.alert('Atenção', 'Selecione uma solicitação para registrar o parecer.');
      return;
    }

    let message = '';
    if (type === 'approve') message = 'Promoção aprovada com sucesso.';
    if (type === 'reject') message = 'Promoção indeferida. Empresa será notificada.';
    if (type === 'adjust') message = 'Solicitação de ajustes enviada à empresa.';

    Alert.alert('Parecer registrado', message + ' (protótipo).');
  }

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.cardSelected]}
        onPress={() => setSelectedId(item.id)}
      >
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardCompany}>{item.company}</Text>
        <Text style={styles.cardProtocol}>{item.protocol}</Text>
        {isSelected && (
          <Text style={styles.cardHint}>Solicitação selecionada para análise.</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Analisar Solicitações</Text>
          <Text style={styles.headerSubtitle}>
            Lista de pedidos pendentes para decisão do gestor interno.
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={PENDING}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.actionButton, styles.approveButton]}
          onPress={() => handleDecision('approve')}
        >
          <Text style={styles.actionText}>Aprovar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.rejectButton]}
          onPress={() => handleDecision('reject')}
        >
          <Text style={styles.actionText}>Indeferir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.adjustButton]}
          onPress={() => handleDecision('adjust')}
        >
          <Text style={styles.actionText}>Solicitar ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
