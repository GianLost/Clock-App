import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dateTest: new Date(),
      textStatus: 'Desativado',
      textButton: 'Ativar'
    }
    this.onOff = this.onOff.bind(this)
    this.idTimer = null
  }

  onOff() {// id setInterval( metodo a ser executado(), intervalo de tempo em milisegundos)
    // clearInterval(id)

    if (this.idTimer != null) {
      clearInterval(this.idTimer)
      this.idTimer = null
      this.setState({textStatus: 'Desativado', textButton: 'Ativar'})
    } else {
      this.setState({ textStatus: 'Ativado', textButton: 'Desligar' })
      this.idTimer = setInterval(() => { this.setState({ dateTest: new Date() }) }, 1000)
    }

  }

  render() {
    return (
      <View style={{ alignItems: 'center', backgroundColor: 'white', height: 900 }}>
        <Text style={{ fontSize: 40, color: 'black', margin: 40 }}>Relógio</Text>
        <Text style={{ fontSize: 40, color: 'black' }}>{this.state.dateTest.toLocaleTimeString()}s</Text>
        <Text style={{ fontSize: 30,color: 'black' }}>{this.state.textStatus}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={this.onOff}
            style={style.button}>
            <Text style={{ fontSize: 30 }}>{this.state.textButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    height: 50,
    flex: 1,
    borderRadius: 30,
    margin: 50
  }
})