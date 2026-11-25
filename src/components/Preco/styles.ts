import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#64748B',
    fontWeight: '600',
  },
  preco: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16A34A',
  }
});