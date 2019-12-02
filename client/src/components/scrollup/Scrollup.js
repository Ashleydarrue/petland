import React, { Component, Fragment } from 'react';
import './Scrollup.scss'

export default class ScrollUp extends Component {
  state = {
       intervalId: 0,
       thePosition: false
   }; 
  componentDidMount() { 
     document.addEventListener("scroll", () => { 
         if (window.scrollY > 170) { 
              this.setState({ thePosition: true }) 
         } else { 
             this.setState({ thePosition: false }) 
         } 
      }); 
      window.scrollTo(0, 0); 
   } 
  onScrollStep = () => { 
      if (window.pageYOffset === 0){ 
          clearInterval(this.state.intervalId); 
      } 
     window.scroll(0, window.pageYOffset - this.props.scrollStepInPx); 
  } 
  scrollToTop = () => { 
     let intervalId = setInterval(this.onScrollStep, this.props.delayInMs); 
     this.setState({ intervalId: intervalId }); 
  } 
  renderGoTopIcon = () => { 
      if (this.state.thePosition){ 
        return <div className="go-top" onClick={this.scrollToTop}>
        <i class="fas fa-level-up-alt"></i>
    </div>
      } 
    } 
    render(){ 
      return (
        <React.Fragment>
          {this.renderGoTopIcon()} 
        </React.Fragment>

) 
} 
}

// return <p id="scrollup"><i class="fas fa-level-up-alt"></i></p>
