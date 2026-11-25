import { useState } from "react"
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native"
import { styles } from "./styles"

interface ForumularioTituloProps {
    AlterarTitulo: (novoTexto: string) => void;
}

export function FormularioTitulo({AlterarTitulo}: ForumularioTituloProps) {
    const [inputTexto, setInputTexto] = useState<string>('');

    const handleConfirmar = (): void => {
        if (inputTexto.trim() !== '') {
            AlterarTitulo(inputTexto);
            setInputTexto('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
            placeholder="Digite um novo Título"
            placeholderTextColor='#94A3B8'
            value={inputTexto}
            onChangeText={setInputTexto}            
            />

        <TouchableOpacity styles={styles.botao} onPress={handleConfirmar} activeOpacity={0.8}>
            <Text style={styles.textoBotao}>Alterar Titulo</Text>
        </TouchableOpacity>
        </View>
    );
}

