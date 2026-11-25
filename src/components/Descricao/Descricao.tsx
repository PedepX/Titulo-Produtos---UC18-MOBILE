import { Text } from "react-native";
import { styles } from "./styles";

interface DescricaoProps {
    texto: string;
}

export function Descricao({texto}: DescricaoProps) {
    return (
        <text style={styles.descricao}>
            {texto}
        </text>
    );
}