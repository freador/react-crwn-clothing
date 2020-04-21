import React from 'react';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux';

import {setCurrentUser} from './redux/user/user.action'
class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth ){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          });
          console.log(this.state);
        })
        
      }
      setCurrentUser()  
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/signin' render={()=> this.props.currentUser ? (<Redirect to="/"/>) : <SignInAndSignUpPage/> }/>
          <Route path="/shop" component={ShopPage}/>
  
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = ( ({user}) => ({
  currentUser: user.currentUser
}))

const mapDispathToProps = dispath => ({
  setCurrentUser: user => dispath( setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispathToProps )(App);
