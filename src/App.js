import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {mydata:[]  };
  }
  componentDidMount() {
    axios.get("https://dummyjson.com/products")
    .then(res=>{
      console.table(res.data.products);
      this.setState({mydata:res.data.products})
    })
  }
  render() { 
    return ( 
      <>
      <h2>API Demo</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.state.mydata.map((value,index)=>{
          return <tr>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.price}</td>
            <td><img src={value.thumbnail} width={100}/></td>
          </tr>
        })}
      </tbody>
      </table>
      </>
     );
  }
}
 
export default App;