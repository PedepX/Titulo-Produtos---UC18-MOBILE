import { View, Text } from "react-native";
import {styles} from './styles'

interface PrecoProps {
    valor: string;
}

export function Preco({valor}: PrecoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Valor:</Text>
            <Text style={styles.preco}>{valor}</Text>
        </View>
    );
}
