import React from 'react';

class MealsFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        //this.props.expand
    }

    render(){
        console.log(this.props.verticalPadding);
        var divStyle = {padding: this.props.verticalPadding + 'px 0'};

        var filterWrapper = React.createElement('div', {className: 'meals-filter', style: divStyle}, 
            React.createElement('div', {className: 'filter-wrapper'}, 
                React.createElement('div', {className: 'input-wrapper'},
                    React.createElement('input', {onKeyUp: this.onkeyup.bind(this) }),
                    React.createElement('div', {className: 'fa fa-2x fa-search ' })
                )
            )
        );

        return filterWrapper;
    }

    onkeyup(e){
        var filter = e.target.value;
        this.props.onFilterChange(filter);
    }
}

export default MealsFilter;