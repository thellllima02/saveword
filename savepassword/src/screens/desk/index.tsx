import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function App() {
  const accounts = [
    { title: 'Title', color: '#d32f2f' },
    { title: 'Title', color: '#388e3c' },
    { title: 'Title', color: '#1976d2' },
    { title: 'Title', color: '#fbc02d' },
    { title: 'Title', color: '#bdbdbd' },
    { title: 'Title', color: '#bdbdbd' },
    { title: 'Title', color: '#bdbdbd' },
    { title: 'Title', color: '#bdbdbd' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Save Password</Text>
      
      <View style={styles.searchBox}>
        <TextInput style={styles.input} placeholder="Search" />
        <Ionicons name="search" size={20} color="black" />
      </View>

      <Text style={styles.subtitle}>My Accounts</Text>
      
      <ScrollView style={styles.accountList}>
        {accounts.map((account, index) => (
          <TouchableOpacity key={index} style={[styles.account, { backgroundColor: account.color }]}>
            <Text style={[styles.accountText, account.color === '#bdbdbd' ? { color: 'black' } : {}]}>{account.title}</Text>
            <Ionicons name="chevron-forward" size={20} color={account.color === '#bdbdbd' ? 'black' : 'white'} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.backButton}>TO GO BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
