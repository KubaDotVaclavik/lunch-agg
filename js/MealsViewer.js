import React from 'react';
import MealsList from './MealsList';
import MealsFilter from './MealsFilter';

class MealsViewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            filter: '',
            headerVerticalPadding: 30
        };
    }


    render(){
        var data = this.getFilteredData();

        var elem = React.createElement('div', null, 
            React.createElement(MealsFilter, {data: data, onFilterChange: this.handleFilterChange.bind(this), verticalPadding: this.state.headerVerticalPadding }),
            React.createElement('div', {className: 'content'},
                React.createElement(MealsList, {data: data})
            )
        );
        return elem;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleFilterChange(filter){
        this.setState({filter: filter});
    }
    handleScroll(e){
        var scrollY = window.scrollY;
        var diff = scrollY > 40 ? 40/2 : scrollY/2;

        if(this.state.headerVerticalPadding != 30 - diff){
            this.setState({headerVerticalPadding: 30 - diff});
        }
    }

    getFilteredData(){
        var filter = this.state.filter || '';

        if(filter.length < 4) return this.state.data;

        return this.state.data.filter(function(item){
            var name = item.name.toLowerCase();
            if(name.indexOf(filter.toLowerCase()) > -1){
                return true;
            }
            return false;
        });
    }
}

export default MealsViewer;