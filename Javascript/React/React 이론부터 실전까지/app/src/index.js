import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
import * as serviceWorker from './serviceWorker';

/*
class HelloReact extends React.Component{
  render(){
    return(
      <h1>Hello React!</h1>
    )
  }
}

function formatInfo(student){
  return student.name + "[" + student.id + "]";
}

const student = {
  id:"20161607",
  name: "marinelife",
  color: "blue"
};

const element = (
  <h3 class={student.color}>
    {formatInfo(student)}
  </h3>
);

ReactDOM.render(element,
  document.getElementById('root'));
*/

/*
function tick(){
  const element = (
    <h3>현재 시간은 [{new Date().toLocaleTimeString()}] 입니다.</h3>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
*/

/*
function Show(props){
  return(
      <h3>
        Name is {props.name}
      </h3>
  );
}

function App(){
  return(
    <main>
      <Show name="인생"/>
      <Show name="마린"/>
      <Show name="리액트"/>
    </main>
  ); 
}

function User(props){
  return(
    <div>
      <img src={props.user.ImageUrl}/>
      &nbsp;
      <strong>{props.user.name}</strong>
    </div>
  );
}

function Board(props){
  return(
    <section>
      <User user={props.user}/>
      {props.title}
      <hr/>
      {props.content}
    </section>
  );
}

const board = {
  title : "게시글 제목",
  content: "게시글 내용 hello world",
  user: {
    name: "인생마린",
    ImageUrl: "https://placeimg.com/32/32/any"
  }
}

Show.defaultProps = {
  name: "디폴트"
}
ReactDOM.render(
  <Board
    title={board.title}
    content={board.content}
    user={board.user}
    />
  , document.getElementById('root'));

*/

/*
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }
  
  tick(){
    this.setState({
      date: new Date()
    })
  }
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  goBack(){
    let nextDate = this.state.date;
    nextDate.setSeconds(nextDate.getSeconds() - 10);
    this.setState({
      date: nextDate
    });
  }

  render(){
    return(
      <div>
        <h3>현재 시각은 [{this.state.date.toLocaleTimeString()}] 입니다.</h3>
        <button onClick={this.goBack.bind(this)}>10초 뒤로가기</button>
      </div>
    );
  }
}
ReactDOM.render(<Clock/>, document.getElementById('root'));
*/

/*
class ApiExample extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data: ''
    };
  }
  callApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json.title
        });
      });
  }

  componentDidMount(){
    this.callApi();
  }

  render(){
    return(
      <h3>
        {this.state.data ? this.state.data : "데이터를 불러오는 줄입니다"}
      </h3>
    );
  }
}

ReactDOM.render(<ApiExample/>,
  document.getElementById("root"));
*/

/*
class EventHandling extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state => ({
      isToggleOn: !this.state.isToggleOn
    }))
  }
  render(){
    return(
    <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON":"OFF"}</button>
    );
  }
}

ReactDOM.render(<EventHandling/>,
  document.getElementById("root"));
*/