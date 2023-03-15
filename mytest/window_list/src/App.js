import './App.css';
import faker from 'faker';
import {FixedSizeList} from 'react-window'

const users = [...Array(1000)].map((item, index) => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
}));

function App() {

  const renderRow = ({index, style}) => {
    return (
      <div style={style}>
        <span>{users[index].name}</span>
        <span>{users[index].email}</span>
        <span>{users[index].avatar}</span>
      </div>
    )
  }

  return (
    <div className="App">
        {/* users.map((user, index) => (
        <div key={index}>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.avatar}</span>
        </div>
      )) */}

      <FixedSizeList height={150} width={300} itemSize={35} itemCount={users.length}>
      {renderRow}
      </FixedSizeList>
    </div>
  );
}

export default App;
