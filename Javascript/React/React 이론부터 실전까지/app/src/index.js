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