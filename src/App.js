import React from 'react';
import Redux from 'react-redux';
import 'semantic-ui-css/semantic.css'
import { Grid, Segment, Rail } from 'semantic-ui-react'
import SkillsList from './skillsList'
import Ticker from './Ticker'
import { Outlet } from 'react-router'


function App() {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Segment basic>
          <Outlet />
          <Rail position='left'>
            <SkillsList />
          </Rail>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default App;
