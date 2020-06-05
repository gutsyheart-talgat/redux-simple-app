import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ChangeJobPage from './pages/ChangeJob'
import ChangeNamePage from './pages/ChangeName'
import ChangeAgePage from './pages/ChangeAge'
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ChangeNamePage} exact />
        <Route path="/job" component={ChangeJobPage} exact />
        <Route path="/age" component={ChangeAgePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
