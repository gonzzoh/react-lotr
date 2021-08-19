import './App.css';
import Movie from './components/Movie.jsx'


function App() {
  // const movie1Info = {
  //   title: 'The Fellowship of the Ring',
  //   hours: 2,
  //   minutes: 58
  // }
  // const movie2Info = {
  //   title: 'The Two Towers',
  //   hours: 2,
  //   minutes: 59
  // }
  // const movie3Info = {
  //   title: 'The Return of the King',
  //   hours: 3,
  //   minutes: 21
  // }
  
//   const movies = [
//     {
//         title: 'The Fellowship of the Ring',
//         hours: 2,
//         minutes: 58
//     },
//     {
//         title: 'The Two Towers',
//         hours: 2,
//         minutes: 59
//     },
//     {
//         title: 'The Return of the King',
//         hours: 3,
//         minutes: 21
//     }
// ]
  return (
    <div className="App">
      <Movie 
        title='The Fellowship of the Ring'
        hours={2}
        minutes={59}
      />
      <Movie 
        title='The Two Towers'
        hours={2}
        minutes={58}
      />
      <Movie  
        title='The Return of the King'
        hours={3}
        minutes={21}
      />
    </div>
  );
}

export default App;
