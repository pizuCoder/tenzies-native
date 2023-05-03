import React from "react"
import Die from "./Die"
import {View, Text, TouchableOpacity} from 'react-native';
// import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-native-confetti';
import styles from "./CssStyles";


export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rolls, setRolls] = React.useState(0)
    const [highScore, setHighScore] = React.useState(null)

    const updateHighScore = React.useCallback(() => {
      const currentRollCount = Number(localStorage.getItem("highScore")) || 0;
      const newRollCount = rolls + 1;
      if (newRollCount < currentRollCount || currentRollCount === 0) {
        localStorage.setItem("highScore", newRollCount);
        setHighScore(newRollCount);
      }
    }, [rolls, setHighScore]);

    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            updateHighScore()
            
        }
    }, [ dice, updateHighScore])

    
    

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: Math.floor(Math.random() * 1000000)
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        if(!tenzies) {
            setRolls(rolls + 1)
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setRolls(0)
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    

    React.useEffect(() => {
        const prevHighScore = localStorage.getItem("highScore")
        if (prevHighScore !== null) {
            setHighScore(parseInt(prevHighScore))
        }
        
    }, [])

    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))

    
    return (
        <TouchableOpacity style={styles.main}>
            {tenzies && <Confetti
            colors={['red', 'green', 'blue']}
            confettiCount={500}
            timeout={10}
            untilStopped={tenzies}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />}
            <Text style={styles.title}>Tenzies</Text>
           
            <Text style={styles.instructions}>
              { tenzies ? 'Congratuations! You Won! \nStart a new game to beat the best score!'
              :'Roll until all dice are the same.\n Click each die to freeze it at its current value between rolls.\nThe best score is the lowest number of rolls taken to win'}
            </Text>
            
            <View style={styles.diceContainer}>
                {diceElements}
            </View>
            <Text>Best Score: {highScore-1}</Text>
            <Text>Roll Count: {rolls}</Text>
            
            <TouchableOpacity 
                style={styles.rollDice} 
                onPress={rollDice}
            >
                {tenzies ? <Text style={styles.rollDiceText}>New Game</Text> : <Text style={styles.rollDiceText}>Roll</Text>}
            </TouchableOpacity>
        </TouchableOpacity>
    )
}