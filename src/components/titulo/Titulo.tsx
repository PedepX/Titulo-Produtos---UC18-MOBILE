import { Text } from 'react-native';
import { styles } from './styles';

interface TituloProps {
  texto: string;
}

export function Titulo({ texto }: TituloProps) {
  return (
    <Text style={styles.titulostyle}>
      {texto}
    </Text>
  );
}
