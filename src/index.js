import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCFEeHdTdCZeLJqPyMrWzFQfVVbP2cPqhw';

// CREATE NEW COMPONENT AND PRODUCE SOME HTML
class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'Maluco Beleza'}, (videos) =>{
      this.setState({ videos });
      // this.setState({ videos: videos}); <-- Key & prop same name
    });
  }
  render(){
    return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

// Put the generated html on the page DOM

ReactDOM.render(<App />,document.querySelector('.container'));
