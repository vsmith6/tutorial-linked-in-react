import React from 'react';
import PropTypes from 'prop-types';

import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

class Library extends React.Component {

static defaultProps = {
    books:[
        {"title": "Harry Potter and the Goblet of Fire", "author": "J.K. Rowling", "pages": 1200 }
    ]
}

state = { 
    open: true,
    freeBookmark : true, 
    hiring: true,
    data: [],
    loading: false
}

componentDidMount(){
   this.setState({loading: true});
   fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
   .then(data => data.json())
   .then(data => this.setState({data, loading:false}));
}
componentDidUpdate(){
    console.log("the component just updated");
}
  // adding constructor for state
//   constructor(props) {
//     super(props); //super is a method here
//     this.state = {
//       //seeing if our library is open or not
//       open: true
//     };
//     //whenever using a constructor, functions need to be binded to the this
//     this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
//   }

//   toggleOpenClosed() {
//     this.setState({
//       open: !this.state.open
//     });
//   }

toggleOpenClosed = ()=> { //arrow functions automatically bind 'this' inside the context of the function
    this.setState(prevState => ({
        open: !prevState.open
    }));
}

  render() {
    console.log(this.state);
    const { books } = this.props;

    //if the library is this.state.open show open else show closed that is what is in h2 tag down there
    return (
      <div>
          {this.state.hiring ? <Hiring /> : <NotHiring /> }

          {this.state.loading 
            ? "loading..."
            : <div>
                {this.state.data.map((product, i) => {
                    return (
                        <div key={i}>
                            <h3>Library Product of the Week! </h3>
                            <h4>{product.name}</h4>
                            <img alt={product.name} src={product.image} height={100}/>
                            </div>
                    )
                })}
                </div>
          
          
           }
       <h1> Welcome to the Library </h1>
        <h2> The library is {this.state.open ? "open" : "closed"}</h2>
        <button onClick={this.toggleOpenClosed}>Change Status</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark = {this.state.freeBookmark}
          />
        ))}
        <FavoriteColorForm />
      </div>
    );
  }
}
class FavoriteColorForm extends React.Component {
    state = { value : '' }
    newColor = e => {
        this.setState({ value: e.target.value })

    }
    submit = e => {
        console.log(`New Color: ${this.state.value}`)
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favorite Color:
                    <input 
                    type="color"
                    onChange = { this.newColor } />
                </label>
                <button>Submit</button>

                </form>
        )
    }
}

Library.propTypes = {
    books: PropTypes.array
};
Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library;