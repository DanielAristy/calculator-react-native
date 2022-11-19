import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F2F3',
    borderWidth: 1,
    borderColor: 'red',
  },
  row: {
    maxWidth: '120%',
    flexDirection: 'row',
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 30,
    backgroundColor: '#17171C',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 50,
    backgroundColor: '#4B5EFC',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#747477',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  viewBottom: {
    position: 'absolute',
    bottom: 10,
  },
  smallTextLight: {
    fontSize: 32,
    color: '#17171C',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: '#4E505F',
    fontWeight: '500',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'thistle',
  },

  operationView: {},
});
