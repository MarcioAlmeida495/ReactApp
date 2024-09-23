import './styles.css'
import { Component } from 'react';
import { loadPosts } from '../Utils/loadPosts';
import { Posts } from '../Components/Posts';


//import { StaticImg } from '../Components/StaticImg';

export class Home extends Component{
  
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPages: 8
  };
  componentDidMount(){
    this.loadPosts();
  }
 
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const {page, postsPerPages} = this.state;
    this.setState({allPosts: postsAndPhotos,posts: postsAndPhotos.slice(page*postsPerPages, ((page+1)*postsPerPages)),
        page: page+1
    });
    console.log(postsAndPhotos.slice(page*postsPerPages , ((page+1)*postsPerPages)))
  }

  componentDidUpdate(){
  }
  
  handleNextPage = () =>{ 
    const {page, allPosts, postsPerPages, posts} = this.state;
    
    this.setState({posts: posts.concat(allPosts.slice(page*postsPerPages , ((page+1)*postsPerPages))),
      page: page+1
  });
  }

  render() {
    const { posts } = this.state;
    return(
      <section className='container'>
         
         <Posts posts={ posts }></Posts>
         <button onClick={this.handleNextPage} >LOAD MORE POSTS</button>
      </section>
    );
  }
}
