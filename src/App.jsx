
import './App.css';
import Balance from './Componenets/Balance';
import { Typography, styled,Box} from '@mui/material';
import ExpenseCard from './Componenets/ExpenseCard';
const Header = styled(Typography)`
margin:10px 0px;
font-size:36px;
color:blue;
text-transform:uppercase;`

function App() {
  return (
    <div className="App">
    <Header>Expense Managment</Header>
    <Box>
       <Box>
        <Balance/>
        <ExpenseCard/>
       </Box>
       <Box></Box>
    </Box>
    </div>

  );
}

export default App;
