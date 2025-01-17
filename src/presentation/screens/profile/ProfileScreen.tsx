import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Fernando Herrera'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() =>
          useProfileStore.setState({email: 'gerardodlg.dev@gmail.com'})
        }>
        <Text>Cambiar email</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('John Doe', 'john.doe@google.com')}>
        <Text>Regresar a John</Text>
      </Pressable>
    </View>
  );
};
