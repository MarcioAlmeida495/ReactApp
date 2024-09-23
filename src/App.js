import './App.css';
import { Component } from 'react';
import { loadPosts } from './Utils/loadPosts';
import { Posts } from './Components/Posts';
import { StaticImg } from './Components/StaticImg';
class App extends Component{
  
  state = {
    posts: []
  };
  componentDidMount(){
    this.loadPosts();
  }
 
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    //postsAndPhotos[0]; 
    this.setState({posts: postsAndPhotos});
    
  }

  componentDidUpdate(){
  }
  
  render() {
    const { posts } = this.state;
    return(
      <section className='container'>
         <StaticImg  directory="/imgcomoda.jpg" />
         <Posts posts={ posts }></Posts>
      </section>
    );
  }
}
export default App;
