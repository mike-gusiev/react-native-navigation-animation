import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import BurgerIcon from '../components/BurgerIcon';

const PageBlank = ({ setMenuOpen, menuOpen, labelText }) => {
  
  const handleOpenMenu = () => {
    setMenuOpen(false);
  };
  
  const animatedPositionLeft = useRef(new Animated.Value(1)).current;
  const animatedPositionX = useRef(new Animated.Value(1)).current;
  const animatedRadius = useRef(new Animated.Value(1)).current;
  
  const positionLeftInterpolate = animatedPositionX.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ 0, 253 ],
  });
  
  const positionXInterpolate = animatedPositionX.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ '0deg', '-7deg' ],
  });
  
  const radiusInterpolate = animatedPositionX.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ 0, 48 ],
  });
  
  useEffect(() => {
    if (menuOpen) {
      pageIn()
    } else {
      pageOut()
    }
  }, [ menuOpen ])
  
  const pageIn = () => {
    Animated.timing(animatedPositionLeft,
      {
        toValue: 0,
        duration: 1000,
      }).start();
    Animated.timing(animatedPositionX,
      {
        toValue: 0,
        duration: 1000,
      }).start();
    Animated.timing(animatedRadius,
      {
        toValue: 0,
        duration: 1000,
      }).start();
  };
  
  const pageOut = () => {
    Animated.timing(animatedPositionLeft, {
      toValue: 1,
      duration: 1000,
    }).start();
    Animated.timing(animatedPositionX,
      {
        toValue: 1,
        duration: 1000,
      }).start();
    Animated.timing(animatedRadius,
      {
        toValue: 1,
        duration: 1000,
      }).start();
  };
  
  return (
    <Animated.View style={[
      styles.wrapper,
      {
        left: positionLeftInterpolate,
        transform: [ { rotate: positionXInterpolate }, { rotateY: 0 } ],
        borderRadius: radiusInterpolate,
      }
    ]}>
      <View style={styles.title}>
        <BurgerIcon onHandleMenu={handleOpenMenu}/>
        <Text style={styles.title__header}>{labelText}</Text>
      </View>
    </Animated.View>
  );
};

export default PageBlank;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 253,
    transform: [ { rotate: -7 }, { rotateY: 0 } ],
    height: 948,
    width: 440,
    backgroundColor: '#FFFFFF',
  },
  title: {
    position: 'absolute',
    flexDirection: 'row',
    width: 200,
    top: 43,
    left: 36,
  },
  title__header: {
    fontSize: 24,
    alignSelf: 'flex-start',
    marginLeft: 15,
    fontWeight: '500',
    letterSpacing: 5,
    color: '#9F9FA0',
    textTransform: 'uppercase',
  }
});
