import { Image, StyleSheet } from "react-native";
import { styles } from "./style";
interface ProdutoProps {
    imageUrl: string;
}

export function Produto({imagemUrl}: ProdutoProps) {
    return (
        <Image source={{uri: imagemUrl}} style={styles.imagem} resizeMode="cover"/>
    );
}