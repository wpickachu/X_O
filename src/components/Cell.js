import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './Button';
import CellStyles from '../styles/components/CellStyles';

class Cell extends Component {

  renderColumns() {
    return [0, 1, 2].map(val =>
      <Button
        onClick={this.props.onClick}
        rowIndex={this.props.rowIndex}
        colIndex={val}
        cellValue={this.props.boardRow[val]}
        gameOver={this.props.gameOver}
        key={val}
      />
    )
  }

  render() {
    return (
      <View style={CellStyles.container}>
        { this.renderColumns() }
      </View>
    );
  }
};

export default Cell;