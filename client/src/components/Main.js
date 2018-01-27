import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header';
import EventsCalendar from './EventsCalendar';
import Footer from './Footer';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Header/>
    <Switch>
      <Route path='/events' component={ EventsCalendar } />
    </Switch>
    <Footer />
  </main>
)

export default Main