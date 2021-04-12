import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {Image, Dimensions} from 'react-native';
import Header from '../../Component/Header';
import strings from '../../constants/lang/en';
import commonStyles from '../../styles/commonStyles';
export default class ZoomImage extends Component {
  render() {
    return (
      <View>
        <Header textData={strings.IMAGE_ZOOM} />

        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={200}
          imageHeight={200}>
          <Image
            style={{...commonStyles.zoomImage}}
            source={{
              uri:
                'https://digitalrill.com/wp-content/uploads/2019/04/professional-girl-png-8.png',
            }}
          />
        </ImageZoom>
      </View>
    );
  }
}
