import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Titulo } from './src/components/titulo/Titulo';
import { Produto } from './src/components/Produto/Produto';
import { Descricao } from './src/components/Descricao/Descricao';
import { Preco } from './src/components/Preco/Preco';

interface Desafio4Props {
  aoVoltar?: () => void;
}

export default function Desafio4({ aoVoltar }: Desafio4Props) {
  const [nomeProduto] = useState('Headphone Bluetooth Pro');

  const produto = {
    imagem: 'https://acdn-us.mitiendanube.com/stores/005/839/688/products/a780acfc6127312c97fa7e62086fbfc3-efd22d72afd1de2e7a17413677850425-1024-1024.webp',
    descricao: 'Fone de ouvido sem fio com cancelamento ativo de ruído, bateria de 30 horas e áudio de alta definição.',
    preco: 'R$ 499,90',
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.tela}>
        <View style={styles.cartao}>
          
          <Titulo texto={nomeProduto} />

          <Produto imagemUrl={produto.imagem}/>
          <Descricao texto={produto.descricao}/>
          <Preco valor={produto.preco}/>

          {aoVoltar && (
            <TouchableOpacity 
              style={styles.botaoVoltar} 
              onPress={aoVoltar}
              activeOpacity={0.8}
            >
              <Text style={styles.textoBotao}>⬅ Voltar para Desafio 3</Text>
            </TouchableOpacity>
          )}

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cartao: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  botaoVoltar: {
    backgroundColor: '#64748B',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
