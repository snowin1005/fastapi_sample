import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';
import reportWebVitals from './reportWebVitals';

const MoneyBook = () => {
  const books = [
    { date: "1/1", item: "お年玉", amount: 10000 },
    { date: "1/3", item: "ケーキ", amount: -500 },
    { date: "2/1", item: "小遣い", amount: 3000 },
    { date: "2/5", item: "マンガ", amount: -600 }
  ]
  return (
    <div>
      <h1>小遣い帳</h1>
      <table className="book">
        <thead>
          <tr><th>日付</th><th>項目</th><th>入金</th><th>出金</th></tr>
        </thead>
        <tbody>
          <MoneyBookItem books={books[0]} />
          <MoneyBookItem books={books[1]} />
          <MoneyBookItem books={books[2]} />
          <MoneyBookItem books={books[3]} />
        </tbody>
      </table>
    </div>
  )
}

const MoneyBookItem = (props) => {
  const { date, item, amount } = props.books
  return (
    <tr>
      <td>{date}</td>
      <td>{item}</td>
      <td>{amount >= 0 ? amount : null}</td>
      <td>{amount < 0 ? -amount : null}</td>
    </tr>
  )
}

MoneyBookItem.prototype = {
  book: PropTypes.object.isRequired
}

ReactDOM.render(
  <MoneyBook />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
