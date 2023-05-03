import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B2434',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    marginTop: 100,
    backgroundColor: '#F5F5F5',
    height: 500,
    maxWidth: 800,
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 40,
    margin: 0,
  },
  instructions: {
    fontFamily: 'Inter',
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
    whiteSpace: 'pre-wrap'
  },
  diceContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridAutoRows: 'auto',
    gap: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  dieFace: {
    height: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  dieNum: {
    fontSize: 20,
  },
  rollDice: {
    height: 50,
    width: 150,
    borderRadius: 6,
    backgroundColor: '#5035FF',
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Karla',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 50,
    overflow: 'hidden',
  },
  rollDiceText: {
    fontSize: 16,
    color: '#fff',
  },
  '@media (max-width: 768px)': {
    main: {
      marginTop: 50,
      height: 'auto',
      marginLeft: 10,
      marginRight: 10,
      maxWidth: '100%',
    },
    title: {
      fontSize: 30,
    },
    instructions: {
      fontSize: 16,
      marginBottom: 20,
      whiteSpace: 'pre-wrap'
    },
    diceContainer: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridAutoRows: 'auto',
      gap: 20,
      marginBottom: 20,
    },
    dieFace: {
      height: 40,
      width: 40,
    },
    dieNum: {
      fontSize: 16,
    },
    rollDice: {
      height: 40,
      width: 120,
      fontSize: 16,
      color: '#fff'
    },
    rollDiceText: {
        fontSize: 16,
        color: '#fff',
      },
  },
  '@media (max-width: 480px)': {
    main: {
      margin: 60,
      padding: 20,
      maxWidth: '90%',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
    },
    instructions: {
      fontSize: 14,
      width: '100%',
      height: 'auto',
      color: '#1a1a1a',
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap'
    },
    diceContainer: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: 'auto',
      gap: 20,
      marginBottom: 10,
    },
    dieFace: {
      height: 50,
      width: 50
    },
    dieNum: {
        fontSize: 16
    },
      
    rollDice: {
        height: 30,
        width: 100,
        fontSize: 12,
        color: '#fff'
    },
    rollDiceText: {
        fontSize: 16,
        color: '#fff',
      },
}
})

export default styles