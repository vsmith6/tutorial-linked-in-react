import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import Library from './Library';




// var style = {
//     backgroundColor: 'purple',
//     color: 'white',
//     fontFamily: 'Arial'
// }

// let ptoDays = {
//   total: 33,
//   sick: 5,
//   holidays: 9,
//   goal: 100
// };

// class Message extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1 style={{color: this.props.color}}>Hello you lucky people</h1>
//                 <h2>{this.props.msg}</h2>
//                 <p>I really dont want to go to work in {this.props.minutes} minutes.</p>

//                 </div>
//         )
//     }
// }

//   const getPercent = (decimal) => {
//         return decimal * 100 + '%';
//     }
//   const  calcGoalProgress = (total, goal) => {
//         return getPercent(total / goal);

//     }

// const PtoDayCounter = ({total, sick, holidays, goal}) => {
//     return (
//         <section>
//         <h1>PTO Days</h1>
//         <div>
//           <p> Total Days: {total}</p>
//         </div>
//         <div>
//           <p> Sick Days: {sick}</p>
//         </div>
//         <div>
//           <p> Holiday Days: {holidays}</p>
//         </div>
//         <div>
//           <p> Goal Progress: {calcGoalProgress(total, goal)}</p>
//         </div>
//       </section>

//     )
// }

// class PtoDayCounter extends Component {
//     getPercent = (decimal) => {
//         return decimal * 100 + '%';
//     }
//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total / goal);

//     }

//   render() {
//       const { total, sick, holidays, goal} = this.props;
//     return (
//       <section>
//         <h1>PTO Days</h1>
//         <div>
//           <p> Total Days: {total}</p>
//         </div>
//         <div>
//           <p> Sick Days: {sick}</p>
//         </div>
//         <div>
//           <p> Holiday Days: {holidays}</p>
//         </div>
//         <div>
//           <p> Goal Progress: {this.calcGoalProgress(total,goal)}</p>
//         </div>
//       </section>
//     );
//   }
// }


const bookList = [
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    pages: 1500
  },
  { title: "The Return of the King", author: "J.R.R. Tolkein", pages: 800 }
];

//the values in "" are default values and will show up if there is data missing
// const Book = ({ title="No Title", author="No Author", pages=0, freeBookmark }) => {
//   return (
//     <section>
//       <h2> {title} </h2>
//       <p> By: {author} </p>
//       <p> Pages: {pages} </p>
//       <p> Free Bookmark Today! {freeBookmark ? 'Yes' : 'No'}</p>
//     </section>
//   );
// };

// const Library = ({books}) => {
//     return (
//         <div>
//           <h1> Welcome to the Library </h1>
//           {books.map(
//               (book, i) => <Book  key={i} title={book.title} author={ book.author} pages={ book.pages} />
//           )}

//             </div>
//     )
// }

// these components are not using the return statement
// const Hiring = () => 
// <div>
//     <p> The library is hiring! Go to www.library.com/jobs for more!</p>
//      </div>
// const NotHiring = () => 
// <div>
//     <p> The library is not hiring! Check back later for more!</p>
//      </div>

// refactoring as ES6 function from the above regular function, destructures the props//adding state
// class Library extends React.Component {

// static defaultProps = {
//     books:[
//         {"title": "Harry Potter and the Goblet of Fire", "author": "J.K. Rowling", "pages": 1200 }
//     ]
// }

// state = { 
//     open: true,
//     freeBookmark : true, 
//     hiring: true,
//     data: [],
//     loading: false
// }

// componentDidMount(){
//    this.setState({loading: true});
//    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//    .then(data => data.json())
//    .then(data => this.setState({data, loading:false}));
// }
// componentDidUpdate(){
//     console.log("the component just updated");
// }
//   // adding constructor for state
// //   constructor(props) {
// //     super(props); //super is a method here
// //     this.state = {
// //       //seeing if our library is open or not
// //       open: true
// //     };
// //     //whenever using a constructor, functions need to be binded to the this
// //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
// //   }

// //   toggleOpenClosed() {
// //     this.setState({
// //       open: !this.state.open
// //     });
// //   }

// toggleOpenClosed = ()=> { //arrow functions automatically bind 'this' inside the context of the function
//     this.setState(prevState => ({
//         open: !prevState.open
//     }));
// }

//   render() {
//     console.log(this.state);
//     const { books } = this.props;

//     //if the library is this.state.open show open else show closed that is what is in h2 tag down there
//     return (
//       <div>
//           {this.state.hiring ? <Hiring /> : <NotHiring /> }

//           {this.state.loading 
//             ? "loading..."
//             : <div>
//                 {this.state.data.map((product, i) => {
//                     return (
//                         <div key={i}>
//                             <h3>Library Product of the Week! </h3>
//                             <h4>{product.name}</h4>
//                             <img alt={product.name} src={product.image} height={100}/>
//                             </div>
//                     )
//                 })}
//                 </div>
          
          
//            }
//        <h1> Welcome to the Library </h1>
//         <h2> The library is {this.state.open ? "open" : "closed"}</h2>
//         <button onClick={this.toggleOpenClosed}>Change Status</button>
//         {books.map((book, i) => (
//           <Book
//             key={i}
//             title={book.title}
//             author={book.author}
//             pages={book.pages}
//             freeBookmark = {this.state.freeBookmark}
//           />
//         ))}
//         <FavoriteColorForm />
//       </div>
//     );
//   }
// }
// class FavoriteColorForm extends React.Component {
//     state = { value : '' }
//     newColor = e => {
//         this.setState({ value: e.target.value })

//     }
//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:
//                     <input 
//                     type="color"
//                     onChange = { this.newColor } />
//                 </label>
//                 <button>Submit</button>

//                 </form>
//         )
//     }
// }

// Library.propTypes = {
//     books: PropTypes.array
// };
// Book.propTypes = {
//     title: PropTypes.string,
//     author: PropTypes.string,
//     pages: PropTypes.number,
//     freeBookmark: PropTypes.bool
// }
render(
  //  <FavoriteColorForm />,
    <Library books={bookList} />,
  //   <PtoDayCounter
  //     total={ptoDays.total}
  //     sick={ptoDays.sick}
  //     holidays={ptoDays.holidays}
  //     goal={ptoDays.goal}
  //   />,
  // <Message color="purple" msg="how the heck are ya" minutes={15} />,
  document.getElementById("root")
);
