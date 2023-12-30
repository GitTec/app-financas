import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '390,90',
    date: '17/09/2019',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '2.500,00',
    date: '20/09/2019',
    type: 1 //receita / entradas
  },
  {
    id: 2,
    label: 'Salário',
    value: '7.200,00',
    date: '22/09/2019',
    type: 1 //receita / entradas
  },

]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Fut & Natico" />
      <Balance saldo="9.250,00" gastos="-527,50" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list} //itens da lista
        keyExtractor={(item) => String(item.id)}  //cada item da lista precisa que o id seja String, aqui eu trato esses dados
        showsVerticalScrollIndicator={false}  //para não existir a barra de rolagem na lista
        renderItem={({ item }) => <Movements data={item} />} //Passa em cada item e renderiza
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
