import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import strings from '../constants/lang/en';
import fontFamily from '../styles/fontFamily';
export default function InfiniteList({data}) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{uri: data.profileImg[1].original}}
        style={styles.profileImage}
      />
      <View>
        <Image source={imagePath.star} style={styles.star} />
      </View>

      <View style={styles.listData}>
        <Text style={styles.fullName}>
          {strings.INFINITE_LIST_DATA_NAME} {data.fullName}
        </Text>
        <View style={styles.information}>
          <Text>
            {strings.INFINITE_LIST_DATA_GENDER} {data.gender}
          </Text>

          <Text>
            {strings.INFINITE_LIST_DATA_DOB} {data.dob.date}/{data.dob.month}/
            {data.dob.year}
          </Text>
          <Text>
            {strings.INFINITE_LIST_DATA_ADDRESS} {data.addressDetails.address}
          </Text>
        </View>
        <View style={styles.shareArrowIcon}>
          <Image source={imagePath.share} style={styles.share} />
          <Image source={imagePath.arrow} style={styles.arrow} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: colors.listBorder,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  listData: {
    flexDirection: 'column',
  },
  shareArrowIcon: {
    flexDirection: 'row',
  },
  fullName: {
    marginVertical: 10,
    marginHorizontal: -80,
    fontFamily: fontFamily.Bold,
    fontSize: 15,
  },
  profileImage: {
    width: 110,
    height: 120,
    margin: 10,
    position: 'absolute',
    borderRadius: 10,
  },
  information: {
    marginHorizontal: -80,
  },
  name: {
    marginTop: 20,
  },
  star: {
    position: 'relative',
    width: 20,
    height: 20,
    marginHorizontal: 99,
    marginVertical: 10,
    tintColor: colors.star,
  },
  share: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginHorizontal: 80,
    tintColor: colors.share,
  },
  arrow: {
    width: 25,
    height: 25,
    marginHorizontal: 100,
    marginVertical: 13,
    tintColor: colors.arrowTintColor,
  },
});
