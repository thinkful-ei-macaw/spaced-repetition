import React, { Component } from "react";
import LearningPage from "../../components/LearningPage/LearningPage";
import ApiService from "../../services/api-service";
import Button from "./../../components/Button/Button";


class LearningRoute extends Component {
  state = { 
    error: null,
    showResults: false,
    wasUserCorrect: false,
    correctCount: 0,
    incorrectCount: 0,
    score: 0,
    isCorrect: false,
    original: '',
    translation: '',
    guess: ''
  };

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleGuess = (e) => {
    e.preventDefault();
    ApiService.getNextWord().then((data) => {
      this.setState({
        original: data.nextWord
      })
    })
    let guess = e.target['learn-guess-input'].value
    this.setState({
      guess
    })
    ApiService.getResults(guess).then((data) => {
      this.setState({ 
        nextWord: data.nextWord,
        score: data.totalScore,
        incorrect: data.wordIncorrectCount,
        correct: data.wordCorrectCount,
        isCorrect: data.isCorrect,
        showResults: true,
        translation: data.answer,
      })
      });
  }


  handleNextWord = (e) => {
    e.preventDefault();
    this.setState({
      showResults: false
    })
  }

  renderResults = () => {
    let {isCorrect, guess, original, translation, score} = this.state
    return <section className="results">
      <p className="DisplayScore">Your total score is: {score}</p>
      {isCorrect ? <h2>You were correct! :D</h2> : <h2>Good try, but not quite right :(</h2> }
      <p className="DisplayFeedback">The correct translation for {original} was {translation} and you chose {guess}!</p>
      <Button onClick={this.handleNextWord}>Try another word!</Button>
      </section>
  }

  render() {
    return (
      <section>
      {this.state.showResults ? this.renderResults() : <LearningPage handleGuess={this.handleGuess}/>}
        
      </section>
    );
  }
}

export default LearningRoute;
