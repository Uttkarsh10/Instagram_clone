import React from 'react'
import Grid from '@mui/material/Grid'
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage'

function MainContent() {
  return (
    <Grid container>
      <Grid item xs={2}>a</Grid>

      <Grid item xs={6}>
        <StatusBar/>
        <MainPage/>
      </Grid>

      <Grid item xs={2}>c</Grid>
      <Grid item xs={2}>d</Grid>
    </Grid>
  )
}

export default MainContent