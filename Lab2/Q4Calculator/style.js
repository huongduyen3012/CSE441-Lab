import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },

  button: {
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 30, 
    width: 75, 
    height: 75,
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 5,
    backgroundColor: '#f0f0f0',
  },

  buttonOperator: {
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 30, 
    width: 75, 
    height: 75,
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 5,
    backgroundColor: 'skyblue',
  },

  button0: {
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 30, 
    width: 160, 
    height: 75,
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 5,
    backgroundColor: '#f0f0f0',
  },

  buttonClear: {
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 20, 
    width: 330, 
    height: 50,
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 15,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 25,
    color: 'black',
  },

  input: {
    fontSize: 40,
    color: 'black',
  }
})