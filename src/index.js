import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCFEeHdTdCZeLJqPyMrWzFQfVVbP2cPqhw';

// CREATE NEW COMPONENT AND PRODUCE SOME HTML
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Maluco Beleza");
  }

videoSearch(term){
  YTSearch({ key: API_KEY, term: term}, (videos) =>{
    this.setState({
       videos: videos,
       selectedVideo: videos[0]
     });
    // this.setState({ videos: videos}); <-- Key & prop same name
  });
}

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
    <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
    </div>
    );
  }
}

// Put the generated html on the page DOM

ReactDOM.render(<App />,document.querySelector('.container'));
