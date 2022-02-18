import { Component } from 'react'
// import Counter from './1-Counter'
// import LifeCycle from './2-LifeCycle'
// import ForceUpdate from './3-ForceUpdate'
// import LegacyLifeCycle from './4-LegacyLifeCycle'
// import UnMounting from './5-UnMounting'
// import ErrorBoundaries from './6-ErrorBoundaries'
// import DefaultProps from './7-DefaultProps'
// import ListKey from './8-ListKey'
// import Fragment from './9-Fragment'
// import Portal from './10-Portal'
// import Form from './11-Form'
// import AdvanceSetState from './12-AdvanceSetState'
// import CreateRef from './13-CreateRef'
// import PureComponent from './14-PureComponent'
// import HOC from './15-HOC/App'
import TableApp from './exercise/Table'

class App extends Component {
  render () {
    return (
      <div>
        <TableApp />
        {/* <HOC /> */}
        {/* <PureComponent /> */}
        {/* <CreateRef /> */}
        {/* <AdvanceSetState /> */}
        {/* <Form /> */}
        {/* <Portal /> */}
        {/* <Fragment /> */}
        {/* <ListKey /> */}
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
