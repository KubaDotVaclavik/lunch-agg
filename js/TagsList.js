import React from 'react';

class TagsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        var elem = React.createElement('ul', {className: 'tags-list'},
            this.props.data.map(function(tagName){

                return React.createElement('li', {className: 'list-item'}, 
                    React.createElement('span', {className: 'tag'}, tagName)
                    );
            })
        );
        return elem;
    }

}

export default TagsList;