import { StyleSheet, Dimensions, View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MenuNavigator from './MenuNavigator'
import AlarmaNavigator from './AlarmaNavigator'
import TematicasNavigator from './TematicasNavigator'
import UserNavigator from './UserNavigator'
import COLORS from '../constants/Colors'

const BottomTabs = createBottomTabNavigator();
const { height, width } = Dimensions.get("window");


const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,

        tabBarHideOnKeyboard: true

      
      }}
      >
        <BottomTabs.Screen name="Menu-tab" component={MenuNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <FontAwesome name="home" size={24} color={focused ? COLORS.primary : COLORS.grey} />
                <Text style={{ color: focused ? COLORS.primary : COLORS.grey }}>Menu</Text>
              </View>
            ),
            unmountOnBlur: true,
          }}
          />
        <BottomTabs.Screen name="Tematicas-tab" component={TematicasNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <MaterialCommunityIcons name="meditation" size={26} color={focused ? COLORS.primary : COLORS.grey} />
                <Text style={{ color: focused ? COLORS.primary : COLORS.grey }}>Temáticas</Text>
              </View>
                    ),
             unmountOnBlur: true,
                  }}
        />
        <BottomTabs.Screen name="Alarma-tab" component={AlarmaNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <Ionicons name="alarm" size={23} color={focused ? COLORS.primary : COLORS.grey} />
                <Text style={{ color: focused ? COLORS.primary : COLORS.grey }}>Alarma</Text>
              </View>
            ),
            unmountOnBlur: true,
          }}
          />
        <BottomTabs.Screen name="User-tab" component={UserNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <FontAwesome name="user" size={23} color={focused ? COLORS.primary : COLORS.grey} />
                <Text style={{ color: focused ? COLORS.primary : COLORS.grey }}>Usuario</Text>
              </View>
            ),
            unmountOnBlur: true,
          }}
          />
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: COLORS.grey,
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: height * 0.002,
        position: 'absolute',
        bottom: height * 0.02,
        left: width * 0.04,
        right: width * 0.04,
        borderRadius: 5,
        height: height * 0.1
      },
      tabBarIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })