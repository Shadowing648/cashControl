import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return(
    <AppDrawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props} /> }
      screenOptions={{
        headerShown:false,

        drawerStyle:{
          backgroundColor: '#121212',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor:'#3b3b3b',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#3b3b3b',
        drawerInactiveTintColor: '#fff'

      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
      />

      <AppDrawer.Screen
        name="Registrar"
        component={New}
      />

      <AppDrawer.Screen
        name="Perfil"
        component={Profile}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes;