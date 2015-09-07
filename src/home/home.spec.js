import React from 'react';
import $ from 'jquery';
import Home from './home.js';
 
describe('Home', () => {

  it('should render to the DOM', function() {

    //  Create the <Home /> react component.
    var component = React.render(<Home />, document.body);

    //  Find the DOM element for the created component.
    var node = React.findDOMNode(component);

    //  Check the DOM looks how we'd expect it to.
    expect($(node).children('h1').text()).toEqual("React ES6 Starter");
    
  });

});
