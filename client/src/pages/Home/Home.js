import React, { Component } from 'react';
import folderApi from '../../utils/foldersAPI';
import { Link } from 'react-router-dom';
import { Image } from '../../components/Image'
import { withAuth } from '@okta/okta-react'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// import anime from 'lib/anime.es.js';
// import posed from 'react-pose';



const items = [
  {
    src: 'https://files.slack.com/files-pri/TDV67LNC8-FJG4HPL9X/nature-001.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://i.pinimg.com/originals/f4/a2/1f/f4a21f9e901410cfe15cfa3c49652fd4.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://t3.ftcdn.net/jpg/00/98/03/84/240_F_98038403_WTwloHrzmgptZgnJz59e17iZTdntCELY.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];
class XPage extends Component {
  state = {
    array: ['X', 'Page', 'Array'],
    string: 'XPageString',
  };

  componentDidMount() {
    folderApi.getAllFolders()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  

  render() {

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{width: '100%'}}  />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>

    );

  }
}

export default XPage;


export default withAuth(class Home extends Component {
  state = { authenticated: null};

  checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if(authenticated !== this.state.auth){
          this.setState({ authenticated})
      }
  }

  async componentDidMount(){
      this.checkAuthentication()
  }

  async componentDidUpdate(){
      this.checkAuthentication()
  }

  login = async () => {
      this.props.auth.login('/')
  }

  logout = async () => {
      this.props.auth.logout('/')
  }

  render(){
      if (this.state.authenticated === null) return null;

      const button = this.state.authenticated ? (
          //displayed in the Navbar of profile page
          <div>
          
              <button className="logout-btn" onClick={this.logout}> Logout</button>
          </div>
      ) : (
          <div>
              <p>Login</p>
              <button className="login-btn" onClick={this.login}>Login</button>
          </div>
      )


      return (
          <div className="profileNav">
              <Nav />
              {button}
          </div>
      )
  }
})