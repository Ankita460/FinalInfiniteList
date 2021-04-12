import React from 'react';
import {AreaChart, Grid, BarChart, LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import Header from '../../Component/Header';
import {View, Text} from 'react-native';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

class Chart extends React.PureComponent {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];
    const fill = colors.fill;

    return (
      <View>
        <Header textData={strings.HEADER_CHART} />
        <AreaChart
          style={{...commonStyles.chartHeight}}
          data={data}
          contentInset={{...commonStyles.contentInset}}
          curve={shape.curveNatural}
          svg={{fill: colors.areaChartFill}}>
          <Grid />
        </AreaChart>

        <View>
          <BarChart
            style={{...commonStyles.chartHeight}}
            data={data}
            svg={{fill}}
            contentInset={{...commonStyles.contentInset}}>
            <Grid />
          </BarChart>
        </View>
        <View>
          <LineChart
            style={{...commonStyles.chartHeight}}
            data={data}
            svg={{stroke: colors.lineChartStroke}}
            contentInset={{...commonStyles.contentInset}}>
            <Grid />
          </LineChart>
        </View>
      </View>
    );
  }
}

export default Chart;
