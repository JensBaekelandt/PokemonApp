import React from 'react';
import { View, TextInput, Text, Switch, StyleSheet, Button } from 'react-native';


export default function SearchSortBar({ searchText, setSearchText, sortOption, setSortOption, gen1Only, setGen1Only }) {
return (
<View style={styles.container}>
<TextInput
style={styles.input}
placeholder="Search Pokémon..."
value={searchText}
onChangeText={setSearchText}
/>
<View style={styles.row}>
<Text>Gen 1 only</Text>
<Switch value={gen1Only} onValueChange={setGen1Only} />
</View>
<View style={styles.row}>
<Button title="Name A→Z" onPress={() => setSortOption('nameAsc')} />
<Button title="Name Z→A" onPress={() => setSortOption('nameDesc')} />
<Button title="ID ↑" onPress={() => setSortOption('idAsc')} />
<Button title="ID ↓" onPress={() => setSortOption('idDesc')} />
</View>
</View>
);
}


const styles = StyleSheet.create({
container: { marginBottom:10 },
input: { borderWidth:1, borderColor:'#ccc', padding:8, marginBottom:5, borderRadius:5 },
row: { flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginBottom:5 },
});