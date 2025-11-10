import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import avatar from '../../assets/avatar.png';


export default function ProfileScreen() {
return (
<View style={styles.container}>
<Image source={avatar} style={styles.avatar} />
<Text style={styles.name}>Jens Baekelandt</Text>
<Text style={styles.bio}>Student Graduaat Programmeren</Text>
<Text>Email: jens.baekelandt@student.vives.be</Text>
</View>
);
}


const styles = StyleSheet.create({
container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
avatar: { width:100, height:100, borderRadius:50, marginBottom:10 },
name: { fontSize:20, fontWeight:'bold' },
bio: { marginBottom:5 },
});