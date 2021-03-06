import * as React from 'react'
import { Header, About } from './components'

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      {props.children}
    </div>
  )
}