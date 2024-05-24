/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Button,
  Center,
  Divider,
  Heading,
  ScrollView,
  VStack,
} from 'native-base';
import {AppStackNavigationProps} from 'stacks';

export const Home: FC<AppStackNavigationProps<'Home'>> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Heading padding={2} fontSize="xl">
        Select Query
      </Heading>
      <ScrollView>
        <Center>
          <VStack padding={8} space={3} width="100%">
            <Button onPress={() => navigation.navigate('UrqlFetch')}>
              Fetch Query
            </Button>
            <Divider
              my="2"
              thickness={2}
              orientation="horizontal"
              bg={'emerald.500'}
            />
            <Button onPress={() => navigation.navigate('UrqlFetch')}>
              Mutation
            </Button>
          </VStack>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};
