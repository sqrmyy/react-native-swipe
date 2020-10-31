import React from 'react';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { Text, View, ScrollView } from 'react-native';
// import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Text, View, Button, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDE_DATA = [
  { title: 'Step: 1', text: 'aaa' },
  { title: 'Step: 2', text: 'bbb' },
  { title: 'Step: 3', text: 'ccc' },
];

class WelcomeScreen extends React.Component {
  onStartButtonPress = () => {
    this.props.navigation.navigate('main');
  };
  renderSlides() {
    return SLIDE_DATA.map((slide, index) => {
      return (
        <View
          key={index}
          style={{ flex: 1, backgroundColor: 'skyblue', width: SCREEN_WIDTH }}
        >
          <Text>{slide.title}</Text>
          <Text>{slide.text}</Text>
          <Text>{index + 1} / 3</Text>
          <Button title='次へ' onPress={this.onStartButtonPress} />
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default WelcomeScreen;
