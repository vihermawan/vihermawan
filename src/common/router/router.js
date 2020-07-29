import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import HomePage from '../../app/home-page/home-page';
import PortofolioPage from '../../app/portofolio-page/portofolio-page';

class RouterPage extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/portofolio" component={PortofolioPage}/>
            </Switch>
        );
    }
}

export default RouterPage;