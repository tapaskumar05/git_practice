import * as React from 'react';
import './App.css';
import EmployeeManagement from './model-views/EmployeeManagement';

// class App extends React.Component<{}, null> {
//   private model: Model = new Model();
  
//   render() {
//     return(
//       <Provider model={this.model}>
//         <div>qwe</div>
//       </Provider>
//     )
//   }
// }


const App: React.FC = () => {
  return (
    <div className="App">
      <h1> Employee Management System using TypeScript</h1>
      <EmployeeManagement />
    </div>
  );
}

export default App;
