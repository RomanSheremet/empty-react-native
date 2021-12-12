import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const DrawerContent = () => {
  return (
      <View style={styles.mainWrapper}>
        <View style={styles.menuWrapper}>
          <View style={styles.userWrapper}>
            <EvilIcon color={'#feda80'} name="user" size={65} />
            <Text style={styles.userName}>
              111111
            </Text>
          </View>
          <TouchableOpacity
              style={styles.drawerPoints}>
            <Text style={styles.pointText}>Главная</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.drawerPoints}>
            <Text style={styles.pointText}>Каталог</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.drawerPoints}>
            <Text style={styles.pointText}>Корзина</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  headerLogo: {
    width: '95%',
  },
  userWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.22)',
    paddingTop: 10,
  },
  userName: {
    fontFamily: 'Gilroy',
    fontSize: 40,
  },
  drawerPoints: {
    width: '100%',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 100,
  },
  pointText: {
    fontFamily: 'Gilroy',
    marginLeft: 15,
    fontSize: 50,
  },
  menuWrapper: {
    width: '100%',
  },
  socialNetworkWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 40,
  },
  socialNetworkIcon: {
    width: 30,
    height: 30,
  },
});

export default DrawerContent;
