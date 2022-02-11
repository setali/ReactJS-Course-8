import { Component } from 'react'
// import Counter from './1-Counter'
// import LifeCycle from './2-LifeCycle'
// import ForceUpdate from './3-ForceUpdate'
// import LegacyLifeCycle from './4-LegacyLifeCycle'
// import UnMounting from './5-UnMounting'
// import ErrorBoundaries from './6-ErrorBoundaries'
// import DefaultProps from './7-DefaultProps'
import ListKey from './8-ListKey'

class App extends Component {
  render () {
    return (
      <div>
        <ListKey />
        {/* <DefaultProps name='Ali' color='green' />
            <DefaultProps name='Eli' />
            <DefaultProps color='red' /> */}
        {/* <ErrorBoundaries /> */}
        {/* <UnMounting /> */}
        {/* <LegacyLifeCycle /> */}
        {/* <ForceUpdate /> */}
        {/* <LifeCycle /> */}
        {/* <Counter count={5} name='ali' />
        <hr />
        <Counter count={10} /> */}
      </div>
    )
  }
}

export default App
