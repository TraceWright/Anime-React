import React, { Component } from 'react';

class Container extends Component {
    constructor(props) {
		super(props);
    this.state = {
        windowHeight: 0,
        scrollPosition: 0,
        divHeights: {
            elementDemos: 0,
            codeSamples: 0,
            graphSamples: 0,
            about: 0,
            aboutDetailOne: 0,
            aboutDetailTwo: 0,
        }
    }
  }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, true);
        this.setState({ windowHeight: window.innerHeight });
        const divHeights = this.getDivHeights();
        this.setDivHeights(divHeights);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll, true);
    };

    getDivHeights = () => {
        const scrollers = document.querySelectorAll('.scroller');
        let divHeights = {};
        scrollers.forEach(element => {
            divHeights = Object.assign({}, divHeights, { [element.id]: element.offsetTop });
        });
        return divHeights;
    };

    setDivHeights = (divHeights) => {
        Object.keys(divHeights).forEach(key => {
            this.setState(state => (state.divHeights[key] = divHeights[key], state));
        });
    };
  
    handleScroll = (event) => {
		this.setState({ scrollPosition: event.target.scrollingElement.scrollTop });
    };
    
    inScrollView = (scrollPosition, elementTop, buffer) => {
        return scrollPosition + buffer > elementTop ? true : false;
    };
    
    render() {
        const buffer = this.state.windowHeight * 0.8;
        const scrollPos = this.state.scrollPosition;
        const divHeights = this.state.divHeights;
        return (
            <div id="scrolling-divs">
                <div id="elementDemos" className="scroller" >
                    <button className={this.inScrollView(scrollPos, divHeights.elementDemos, buffer) ? 'big-btn fadeInAfterJS' : 'big-btn'}>Element Demos</button>
                </div>
                <div id="codeSamples" className="scroller">
                    <button className={this.inScrollView(scrollPos, divHeights.codeSamples, buffer) ? 'big-btn fadeInAfterJS' : 'big-btn'}>Code Samples</button>
                </div>
                <div id="graphSamples" className="scroller">
                    <button className={this.inScrollView(scrollPos, divHeights.graphSamples, buffer) ? 'big-btn fadeInAfterJS' : 'big-btn'}>Graph Samples</button>
                </div>
                <div id="about" className="scroller" >
                    <div className={this.inScrollView(scrollPos, divHeights.about, buffer) ? 'about fadeIn' : 'about'}>ABOUT</div>
                </div>
                <div id="aboutDetailOne" className="scroller">
                    <p className={this.inScrollView(scrollPos, divHeights.aboutDetailOne, buffer) ? 'aboutDetail fadeIn' : 'aboutDetail'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div id="aboutDetailTwo" className="scroller">
                    <p className={this.inScrollView(scrollPos, divHeights.aboutDetailTwo, buffer) ? 'aboutDetail fadeIn' : 'aboutDetail'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="bottom-pic">
                </div>
                <div className="unfilled-gap"></div>
            </div>

        )
    }
}

export default Container;