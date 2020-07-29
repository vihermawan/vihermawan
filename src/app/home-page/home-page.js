import React, {Component} from 'react'; 
import HomeComponent from '../../modules/home-component/home-component';

class HomePage extends Component { 
    state = {

    }
    render(){
        return (
            <HomeComponent
                initialData = {this.state}
            />
        );
    }
}

export default HomePage;
