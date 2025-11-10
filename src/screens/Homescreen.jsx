import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import PokemonCard from '../components/PokemonCard';
import SearchSortBar from '../components/SearchSortBar';


export default function HomeScreen({ navigation }) {
const [pokemonList, setPokemonList] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [searchText, setSearchText] = useState('');
const [sortOption, setSortOption] = useState('nameAsc');
const [gen1Only, setGen1Only] = useState(false);


useEffect(() => {
console.log('Home mounted');
fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')
.then(res => res.json())
.then(data => setPokemonList(data.results))
.catch(err => setError(err))
.finally(() => setLoading(false));


return () => console.log('Home unmounted');
}, []);

const filteredList = pokemonList
.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()))
.filter((p, index) => (gen1Only ? index < 151 : true))
.sort((a, b) => {
if(sortOption === 'nameAsc') return a.name.localeCompare(b.name);
if(sortOption === 'nameDesc') return b.name.localeCompare(a.name);
if(sortOption === 'idAsc') return pokemonList.indexOf(a) - pokemonList.indexOf(b);
if(sortOption === 'idDesc') return pokemonList.indexOf(b) - pokemonList.indexOf(a);
return 0;
});


if (loading) return <ActivityIndicator style={styles.center} />;
if (error) return <Text style={styles.center}>Error loading Pokémon.</Text>;
if (filteredList.length === 0) return <Text style={styles.center}>No Pokémon found.</Text>;


return (
<View style={styles.container}>
<SearchSortBar
searchText={searchText}
setSearchText={setSearchText}
sortOption={sortOption}
setSortOption={setSortOption}
gen1Only={gen1Only}
setGen1Only={setGen1Only}
/>
<FlashList
data={filteredList}
renderItem={({ item }) => (
<PokemonCard pokemon={item} onPress={() => navigation.navigate('Detail', { name: item.name })} />
)}
keyExtractor={item => item.name}
estimatedItemSize={100}
/>
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, padding: 10 },
center: { flex: 1, textAlign: 'center', marginTop: 20 },
});