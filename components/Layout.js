import React from 'react';
import { StyleSheet, View } from 'react-native';


const Layout = ({ children }) => {
  return (
    <View style={styles.layoutWrapper}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
    position: 'relative',
    borderTopLeftRadius: 48,
    backgroundColor: '#1F1B33',
  },
})
export default Layout;
