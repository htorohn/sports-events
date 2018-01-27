import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    List,
    Segment,
    Dimmer,
    Loader,
    Grid
  } from 'semantic-ui-react';
import { productsFetch } from '../actions';
import Calendar from './Calendar';

class EventsCalendar extends Component {
    
    componentWillMount() {
        this.props.productsFetch();
        //console.log(this.props.state);
        return this.props.state;
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.state)
        return nextProps.state;
        
    }

    createCalendarItems(events) {
        //console.log(events);
        if (events !== undefined){
            const items = _.map(events, (event, id) => {
                return {
                    id,
                    key: id,
                    header: event.nombre,
                    title: event.nombre,
                    start: new Date(event.fecha),
                    end: new Date(event.fecha)
                    //allDay: true
                };
            });
            return items;
        }
        //return [];
    }

    render() {
        const { isFetching, events, fetchingFailed } = this.props.state.events;
        //console.log(events);
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
                <Segment>
                    { console.log('error de fetching')}
                </Segment>
            );
        }

        
        const items = this.createCalendarItems(events);
        //console.log(items);
        //if (Object.keys(items).length > 0){
            return(
                // <Grid centered style={{ padding: '8em 0em' }}>
                    <Segment style={{ padding: '8em 0em' }} >
                        <Calendar
                            events={ items }
                        />
                    </Segment>
                // </Grid>
            )
        //}
         
    }
}

const mapStateToProps = state => {
    return {
      state
    };
  };
  

export default connect(mapStateToProps, { productsFetch })(EventsCalendar);