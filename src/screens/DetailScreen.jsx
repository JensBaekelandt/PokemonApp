import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';


export default function DetailScreen({ route }) {
const { name } = route.params;
const [details, setDetails] = useState(null);
const [species, setSpecies] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
console.log('Detail mounted');
Promise.all([
fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json()),
fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(res => res.json())
])
.then(([pokemonData, speciesData]) => {
setDetails(pokemonData);
setSpecies(speciesData);
})
.catch(err => setError(err))
.finally(() => setLoading(false));


return () => console.log('Detail unmounted');
}, [name]);


if (loading) return <ActivityIndicator style={styles.center} />;
if (error) return <Text style={styles.center}>Error loading detail.</Text>;


return (
<ScrollView style={styles.container}>
<Text style={styles.title}>{details.name.toUpperCase()} (#{details.id})</Text>
<Image source={{ uri: details.sprites.front_default }} style={styles.image} />
<Text>Types: {details.types.map(t => t.type.name).join(', ')}</Text>
<Text>Weight: {details.weight}</Text>
<Text>Abilities: {details.abilities.map(a => a.ability.name).join(', ')}</Text>
<Text style={styles.flavorText}>{species.flavor_text_entries.find(f => f.language.name==='en')?.flavor_text}</Text>
</ScrollView>
);
}


const styles = StyleSheet.create({
container: { flex:1, padding: 15 },
center: { flex:1, textAlign:'center', marginTop:20 },
title: { fontSize: 22, fontWeight:'bold', marginBottom:10 },
image: { width: 150, height: 150, marginBottom: 10 },
flavorText: { marginTop: 10, fontStyle: 'italic' },
});