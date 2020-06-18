import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import { routes } from '../routes';

const Navigation = ({ setMenuOpen }) => {
  const history = useHistory();
  const handleOpenMenu = (route) => {
    setMenuOpen(true);
    history.push(`${route.link}`)
  };
  
  const location = useLocation();
  
  return (
    <View style={styles.navigationWrapper}>
      <Text style={styles.navigationUserName}>Viktor</Text>
      <View style={styles.navigationMenu}>
        {routes.map((route, index, arr) => {
          if (index === arr.length - 1) {
            return (
              <React.Fragment key={route.name}>
                <View style={styles.navigationMenu__separator}/>
                <Link key={route.name}
                      style={styles.navigationMenu__item}
                      to={route.link}
                      onPress={handleOpenMenu} underlayColor="rgba(252, 128, 116, 0.2)">
                  <Text key={route.name}
                        style={[ styles.navigationMenu__itemText, route.link === location.pathname ? styles.navigationMenu__itemActive : null ]}>{route.name}</Text>
                </Link>
              </React.Fragment>
            );
          }
          return (
            <Link key={route.name} style={styles.navigationMenu__item} to={route.link}
                  onPress={handleOpenMenu} underlayColor="rgba(252, 128, 116, 0.2)">
              <Text key={route.name}
                    style={[ styles.navigationMenu__itemText, route.link === location.pathname ? styles.navigationMenu__itemActive : null ]}>
                {route.name}
              </Text>
            </Link>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationWrapper: {
    flex: 1,
  },
  navigationUserName: {
    position: 'absolute',
    top: 122,
    left: 58,
    height: 38,
    width: 83,
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0,
  },
  navigationMenu: {
    position: 'absolute',
    color: 'white',
    top: 180,
    left: 27,
    height: 454,
    width: 176,
  },
  navigationMenu__item: {
    height: 51,
    width: 160,
    paddingLeft: 30,
    borderRadius: 15,
  },
  navigationMenu__itemText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 51,
  },
  navigationMenu__itemActive: {
    color: 'rgba(252, 128, 116, 1)',
  },
  navigationMenu__separator: {
    marginTop: 68.5,
    marginBottom: 68.5,
    height: 1,
    width: 175.5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(132, 129, 142, 1)',
  }
});


export default Navigation;
