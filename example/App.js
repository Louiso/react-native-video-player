/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {VideoPlayer} from '@ls-ui/react-native-video-player';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ApplicationProvider {...eva} theme={eva.light}>
          <VideoPlayer src="https://krowdy-vod-destination.s3.amazonaws.com/production/5f1a0d28b1d2520028b68b4b/5f1a0d28b1d2520028b68b4e-0" />
        </ApplicationProvider>
      </SafeAreaView>
    </>
  );
};
export default App;
