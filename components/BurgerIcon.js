import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const BurgerIcon = ({ onHandleMenu }) => {
  return (
    <TouchableOpacity onPress={onHandleMenu}>
      <View style={styles.burgerIconWrapper}>
        <View style={styles.burgerIconContainer}>
          <View style={styles.burgerIcon__line}/>
          <View style={styles.burgerIcon__line}/>
          <View style={styles.burgerIcon__line}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  burgerIconWrapper: {
    width: 30,
    height: 33,
  },
  burgerIconContainer: {
    width: 30,
    height: 33,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  burgerIcon__line: {
    width: 30,
    height: 4,
    borderRadius: 3.5,
    backgroundColor: '#E8E5E5',
  }
});

export default BurgerIcon;
