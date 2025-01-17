/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../config/app-theme';
import {useCounterStore} from '../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.incrementBy);
  const decrement = useCounterStore(state => state.decrementBy);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${count}`,
    });
  }, [count]);

  return (
    <View>
      <Text style={styles.title}>Count: {count}</Text>

      <Pressable style={styles.primaryButton} onPress={() => increment()}>
        <Text>+1</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => decrement()}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
