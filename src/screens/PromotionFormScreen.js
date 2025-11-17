import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/promotionFormStyles';

export default function PromotionFormScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    if (!name || !type || !startDate || !endDate) {
      Alert.alert('Atenção', 'Preencha os campos principais da promoção.');
      return;
    }

    Alert.alert(
      'Promoção enviada',
      'Sua promoção foi enviada para análise do Ministério da Fazenda (protótipo).',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ],
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cadastrar Promoção</Text>
        <Text style={styles.headerSubtitle}>
          Formulário eletrônico para envio de promoções comerciais.
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Nome da promoção</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Promoção Dia das Mães"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Tipo de promoção</Text>
        <TextInput
          style={styles.input}
          placeholder="Sorteio, Cashback, Desconto..."
          value={type}
          onChangeText={setType}
        />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Data de início</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              value={startDate}
              onChangeText={setStartDate}
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Data de término</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              value={endDate}
              onChangeText={setEndDate}
            />
          </View>
        </View>

        <Text style={styles.label}>Descrição / Observações</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Resumo da mecânica da promoção e informações relevantes."
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Text style={styles.hint}>
          Anexos obrigatórios (regulamento, CNPJ etc.) serão enviados no sistema web
          oficial. Nesta versão mobile, o envio é apenas conceitual.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar para análise</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
