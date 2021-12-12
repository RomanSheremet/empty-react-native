import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Login = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <TouchableOpacity>
            <Text>Приложение запустилось11111111111111111111</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({});

export default Login;
