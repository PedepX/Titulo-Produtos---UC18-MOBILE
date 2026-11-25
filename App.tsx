import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Titulo } from './src/components/titulo/Titulo';
import { FormularioTitulo } from './src/components/formulariotitulo/FormularioTitulo';

import Desafio4 from './App1';

export default function Desafio3() {
  const [textTitulo, setTextoTitulo] = useState<string>('Título Inicial');
  const [irParaDesafio4, setIrParaDesafio4] = useState<boolean>(false);

  if (irParaDesafio4) {
    return <Desafio4 aoVoltar={() => setIrParaDesafio4(false)} />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.tela}>
        <View style={styles.cartao}>
          
          <Titulo texto={textTitulo} />
          <FormularioTitulo AlterarTitulo={setTextoTitulo} />

          <TouchableOpacity 
            style={styles.botaoAvancar} 
            onPress={() => setIrParaDesafio4(true)}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>Ir para Desafio 4 ➔</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cartao: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  botaoAvancar: {
    backgroundColor: '#0F172A',
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
