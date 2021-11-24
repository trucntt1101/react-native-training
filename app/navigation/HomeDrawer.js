import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from '../screens/Home';
import { Image, StyleSheet, View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getHeaderTitle } from '@react-navigation/elements';
import _ from 'lodash';

const Drawer = createDrawerNavigator();

const goodMorning = 'Chao Truc! Chuc ban buoi sang vui ve.';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 100,
          right: -20,
        }}
        onPress={() => props.navigation.closeDrawer()}
      >
        <Image source={require('../assets/menu.png')} style={styles.logoutIcon} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <DrawerItemList {...props} />
      <View style={styles.logoContainer}>
        <View style={styles.lineThrough} />
      </View>
      <DrawerItem
        labelStyle={{ fontSize: 12 }}
        label="About Mr.Tho"
        onPress={() => alert('Link to help')}
      />
      <DrawerItem
        labelStyle={{ fontSize: 12 }}
        label="User instructions"
        onPress={() => alert('Link to help')}
      />
      <DrawerItem
        labelStyle={{ fontSize: 12 }}
        label="Terms and agreements"
        onPress={() => alert('Link to help')}
      />
      <DrawerItem labelStyle={{ fontSize: 12 }} label="FAQ" onPress={() => alert('Link to help')} />
      <DrawerItem
        labelStyle={{ fontSize: 12, color: 'red' }}
        label="Hotline: 19001853"
        onPress={() => alert('Link to help')}
      />
      <DrawerItem labelStyle={{ fontSize: 12 }} label="Connect with Mr.Tho" />
      <View style={styles.followBtnContainer}>
        <TouchableOpacity style={styles.followBtn}>
          <Image source={require('../assets/facebook-full.png')} style={styles.facebookIcon} />
          <View>
            <Text style={styles.followText}>Follow Us On</Text>
            <Text style={styles.facebookText}>facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.lineThrough} />
      </View>
      <DrawerItem
        label={({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/power-off.png')} style={styles.logoutIcon} />
            <Text style={{ color, fontSize: 12 }}>Logout</Text>
          </View>
        )}
        onPress={() => alert('Logout')}
      />
    </DrawerContentScrollView>
  );
}

function HomeDrawer(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerItemStyle: {
          height: 38,
          justifyContent: 'flex-start',
        },
        drawerLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle:
            goodMorning.length > 42
              ? _.truncate(goodMorning, {
                  length: 42,
                })
              : goodMorning,
          drawerLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/home.png')} style={styles.logoutIcon} />
              <Text style={{ color, fontSize: 12 }}>Home</Text>
            </View>
          ),
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return (
              <ImageBackground
                resizeMode="stretch"
                source={require('../assets/background-sky.png')}
              >
                <View
                  style={{
                    height: 75,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 32,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/menu.png')} style={styles.logoutIcon} />
                  </TouchableOpacity>
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>{title}</Text>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image
                      source={require('../assets/notification-with-bg.png')}
                      style={[styles.logoutIcon, { marginRight: 0 }]}
                    />
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'red',
                        width: 13,
                        height: 13,
                        borderRadius: 50,
                        position: 'absolute',
                        left: 8,
                        bottom: 8,
                      }}
                    >
                      <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>3</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 15,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                ></View>
              </ImageBackground>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Book service"
        component={Home}
        options={{
          headerTitle: `Chao truc nguyen! Chuc ban buoi sang vui ve.`,
          drawerLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/schedule.png')} style={styles.logoutIcon} />
              <Text style={{ color, fontSize: 12 }}>Book service</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Manage order"
        component={Home}
        options={{
          headerTitle: `Chao truc nguyen! Chuc ban buoi sang vui ve.`,
          drawerLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/manage-order.png')} style={styles.logoutIcon} />
              <Text style={{ color, fontSize: 12 }}>Manage order</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Promo code"
        component={Home}
        options={{
          headerTitle: `Chao truc nguyen! Chuc ban buoi sang vui ve.`,
          drawerLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/coupon.png')} style={styles.logoutIcon} />
              <Text style={{ color, fontSize: 12 }}>Promo code</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Find out with Mr.Tho"
        component={Home}
        options={{
          headerTitle: `Chao truc nguyen! Chuc ban buoi sang vui ve.`,
          drawerLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/discovery.png')} style={styles.logoutIcon} />
              <Text style={{ color, fontSize: 12 }}>Find out with Mr.Tho</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Handbook"
        component={Home}
        options={{
          headerTitle: `Chao truc nguyen! Chuc ban buoi sang vui ve.`,
          drawerLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/handbook.png')} style={styles.logoutIcon} />
              <Text style={{ color, fontSize: 12 }}>Handbook</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Home}
        options={{
          headerTitle: `Chao truc nguyen! Chuc ban buoi sang vui ve.`,
          drawerLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/notification.png')} style={styles.logoutIcon} />
              <Text style={{ color, fontSize: 12 }}>Notification</Text>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  lineThrough: {
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    marginTop: 5,
    marginBottom: 5,
  },
  followBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  followBtnContainer: {
    width: 130,
    marginLeft: 15,
    marginBottom: 20,
  },
  facebookIcon: {
    height: 28,
    width: 28,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
  },
  followText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  facebookText: {
    color: '#3b5998',
    fontWeight: 'bold',
  },
  logoutIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
});

export default HomeDrawer;
