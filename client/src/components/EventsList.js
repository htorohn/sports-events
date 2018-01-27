import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    List,
    Segment,
    Dimmer,
    Loader
  } from 'semantic-ui-react';
import { productsFetch } from '../actions';

class EventsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          events: {}
        };
    }
    
    componentWillMount() {
        this.props.productsFetch();
        return this.props.state;
    }

    componentWillReceiveProps(nextProps) {
        return nextProps.state;
    }

    createItems(events) {
        console.log(events);
        if (Object.keys(events).length > 0){
            const items = _.map(events, (event, id) => {
                return {header: event.nombre, id};
            });
            return items;
        }
    }

    render() {
        const { isFetching, events, fetchingFailed } = this.props.state.events;
        
        if (isFetching) {
            return (
                <Segment style={{ padding: '10em 0em' }} vertical>
                    <Dimmer active inverted>
                        <Loader size='big' inverted>Loading</Loader>
                    </Dimmer>
                </Segment>
            );
        }

        if (fetchingFailed) {
            return (
                <Segment />
            );
        }

        const items = this.createItems(events);
        console.log(items);
        return(
            <Segment style={{ padding: '8em 0em' }} vertical>
                <List items={ items } />
            </Segment>
        )
    }
}

const mapStateToProps = state => {
    return {
      state
    };
  };
  

export default connect(mapStateToProps, { productsFetch })(EventsList);