import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import actions from '../redux/actions';
import colors from '../styles/colors';
export default function ColorsModal({data, onSelect, selected}) {
  const selecteid = id => {
    onSelect(id);
    actions.ChangeThemeColor(data.colorId);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => selecteid(data.id)}>
        <View
          style={{
            backgroundColor: data.colorId,
            ...styles.color,
          }}>
          <Text style={styles.dataText}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataText: {
    marginLeft: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: colors.buttonText,
  },
  color: {
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
