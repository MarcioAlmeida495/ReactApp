import './styles.css'
import { Component } from 'react';
import { loadPosts } from '../Utils/loadPosts';
import { Posts } from '../Components/Posts';
import { StaticImg } from '../Components/StaticImg';
import { Button } from '../Components/Button';
//import { SearchInput } from '../Components/SearchInput';

//import { StaticImg } from '../Components/StaticImg';

export class Home extends Component{
  
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPages: 10,
    searchValue: ''
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
  
  handleChange = (event) => {
    const {value} = event.target;
    this.setState({searchValue: value})
    const { allPosts, searchValue } = this.state;
    console.log(value)
    !!searchValue ? 
    this.setState({
      posts: allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    })
    :
    console.log('lalala')
    ;
  }

  filterPosts = () => {

  }

  handleNextPage = () =>{ 
    const {page, allPosts, postsPerPages, posts} = this.state;
    
    this.setState({posts: posts.concat(allPosts.slice(page*postsPerPages , ((page+1)*postsPerPages))),
      page: page+1
  });
  }

  
  //<SearchInput onChange={this.handleChange} />
  //<button id='myButton' onClick={this.handleNextPage} >LOAD MORE POSTS</button>
  render() {
    const { posts } = this.state;
    return(
      <section className='container'>
          <StaticImg />
          <Posts posts={ posts }></Posts>
          <Button onClick={this.handleNextPage} text="Load More Posts" />
      </section>
    );
  }
}
