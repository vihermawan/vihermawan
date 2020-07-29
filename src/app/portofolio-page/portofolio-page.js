import React, {Component} from 'react'; 
import PortofolioComponent from '../../modules/portofolio-component/portofolio-component';

class PortofolioPage extends Component { 
    state = {

    }
    render(){
        return (
            <PortofolioComponent
                initialData = {this.state}
            />
        );
    }
}

export default PortofolioPage;
