import React, { Component, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';
import reportWebVitals from './reportWebVitals';

class JunkenGamePage extends Component {
  constructor(props) {
    super(props)
    this.state = { human: null, comuter: null }
  }

  pon(human_hand) {
    const computer_hand = Math.floor(Math.random() * 3)
    this.setState({ human: human_hand, comuter: computer_hand })
  }

  judge() {
    if (this.state.human == null) {
      return null
    } else {
      return (this.state.comuter - this.state.human + 3) % 3
    }
  }

  render() {
    return (
      <div>
        <h1>じゃんけん　ポン！</h1>
        <JyankenBox actionPon={(te) => this.pon(te)} />
        <ScoreBox human={this.state.human} comuter={this.state.comuter} judgement={this.judge()} />
      </div>
    )
  }
}

const JyankenBox = (props) => {
  return (
    <div>
      <button onClick={() => props.actionPon(0)}>グー</button>
      <button onClick={() => props.actionPon(1)}>チョキ</button>
      <button onClick={() => props.actionPon(2)}>パー</button>
    </div>
  )
}

JyankenBox.prototypes = {
  actionPon: PropTypes.func
}

const ScoreBox = (props) => {
  const teString = ["グー", "チョキ", "パー"]
  const judgeString = ["引き分け", "勝ち", "負け"]
  return (
    <div>
      <table className="book">
        <tbody>
          <tr><th>あなた</th><td>{teString[props.human]}</td></tr>
          <tr><th>Computer</th><td>{teString[props.comuter]}</td></tr>
          <tr><th>勝敗</th><td>{judgeString[props.judgement]}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

ScoreBox.propTypes = {
  human: PropTypes.number,
  comuter: PropTypes.number,
  judgement: PropTypes.number
}

ReactDOM.render(
  <JunkenGamePage />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
