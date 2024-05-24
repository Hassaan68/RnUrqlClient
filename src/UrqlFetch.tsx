/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Center, Heading, ScrollView, VStack} from 'native-base';
import {AppStackNavigationProps} from 'stacks';

export const UrqlFetch: FC<AppStackNavigationProps<'UrqlFetch'>> = ({
  navigation,
}) => {
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
          <VStack padding={5} space={2}>
            <Button>Fetch Query</Button>
          </VStack>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UrqlFetch;
