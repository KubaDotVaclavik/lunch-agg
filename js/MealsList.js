import React from 'react';
import TagsList from './TagsList'

class MealsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){

        var elem = React.createElement('ul', {className: 'meals-list'},
            this.props.data.map(function(item){

                return React.createElement('li', {className: 'list-item'}, 
                    React.createElement('div', null, 
                        React.createElement('div', {className: 'meal-title'}, item.name),
                        React.createElement('div', {className: 'meal-price'}, item.price + ',-'),
                        React.createElement('div', {className: 'clearfix'})
                    ),
                    React.createElement(TagsList, {data: item.tags})
                );
            })
        );
        return elem;
    }

}

export default MealsList;
