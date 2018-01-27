import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import EventsList from './EventsList';
import FixedMenu from './FixedMenu';
import Footer from './Footer';

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state
    //console.log(this.props.location.pathname)
    return (

      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ 
                minHeight: 700, 
                padding: '1em 0em', 
                backgroundImage: "url('/images/running-main.jpg')", 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"  
            }}
            vertical
            
          >

            <Container>
              <Menu stackable inverted pointing secondary size='large' style={{ border: 0 }}>
                <Menu.Item active>
                  <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/events" activeClassName="active">Events</NavLink>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>Log in</Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Sports Events'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <EventsList />

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as='a' size='large'>Read More</Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <Button as='a' size='large'>I'm Still Quite Interested</Button>
          </Container>
        </Segment>

        <Footer />
      </div>
    )
  }
}