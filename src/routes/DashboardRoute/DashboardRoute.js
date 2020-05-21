import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./../../components/Button/Button";
import ApiService from "./../../services/api-service";

class DashboardRoute extends Component {
  state = {
    error: null,
    language: "",
    score: 0,
    wordsToPractice: "",
  };

  static defaultProps = {
    location: {},
    history: {
<<<<<<< HEAD
      push: () => { },
    },
  }

  componentDidMount() {
    
  }

  renderWords = () => {
    return (
      <li className="word-to-practice">
        <p className="word">{word}</p>
        <p className="correct-guesses">You have guessed this word correctly {correct} times</p>
        <p className="incorrect-guesses">You have guessed this word correctly {incorrect} times</p>

      </li>
    )
  }

=======
      push: () => {},
    },
  };

  componentDidMount() {
    ApiService.getLanguage().then((data) => {
      this.setState({
        language: data.language.name,
        score: data.language.total_score,
      });
      this.renderWords(data.words);
    });
  }

  renderWords = (words) => {
    let wordsToPractice = words.map((word) => {
      return (
        <li key={word.id} className="word-to-practice">
          <h4 className="word">{word.original}</h4>
          <p className="correct-guesses">
            correct answer count: {word.correct_count}
          </p>
          <p className="incorrect-guesses">
            incorrect answer count: {word.incorrect_count}
          </p>
        </li>
      );
    });
    this.setState({
      wordsToPractice,
    });
  };
>>>>>>> ec9024d3496cdbe44728ebd547294b92d602fc79

  render() {
    const { error } = this.state;
    return (
      <section className="dashboard">
<<<<<<< HEAD
        <h1>Name of App</h1>
        {/* Language goes here */}
        <p className="score">Your Current Score: </p>
        <h2>Words to Practice</h2>
        <ul>
          {this.renderWords()}
        </ul>
        <Link to="/learn">
          <Button>Start Practicing</Button>
        </Link>
      </section>  
=======
        <h2>{this.state.language}</h2>
        <p className="score">Total correct answers: {this.state.score}</p>
        <div role="alert">{error && <p>{error}</p>}</div>
        <h3>Words to practice</h3>
        <ul>{this.state.wordsToPractice}</ul>
        <Link to="/learn">
          <Button>Start practicing</Button>
        </Link>
      </section>
>>>>>>> ec9024d3496cdbe44728ebd547294b92d602fc79
    );
  }
}

export default DashboardRoute;
