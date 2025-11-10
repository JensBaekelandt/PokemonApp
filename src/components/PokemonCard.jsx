import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function PokemonCard({ pokemon, onPress }) {
return (
<TouchableOpacity style={styles.card} onPress={onPress}>
<Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
card: { padding:15, borderBottomWidth:1, borderColor:'#ccc' },
name: { fontSize:16 },
});