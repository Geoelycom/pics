import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
        headers: {
           Authorization: 'Client-ID paUubqhfHk_t1S4MIDxpV6ruef0vtZb8bS4n3QZZ5hY'
        }
        }).then(response=>{
            console.log(response);
        });

    }
    render(){ 
    return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
    )
 }
}

export default App;