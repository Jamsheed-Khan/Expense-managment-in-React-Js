
import './App.css';
import Balance from './Componenets/Balance';
import { Typography, styled,Box} from '@mui/material';
import ExpenseCard from './Componenets/ExpenseCard';
import NewTransactions from './Componenets/NewTransactions';
import Transactions from './Componenets/Transactions';
import { useState } from 'react';




const Header = styled(Typography)`
margin:10px 0px;
font-size:36px;
color:blue;
text-transform:uppercase;`

const Component = styled(Box)`

   display:flex;
   background:#fff;
   width:800px;
   paddding:10px;
   border-radius:20px;
   margin:auto;
   & > div{
    height:70vh;
    width:50%;
    padding:10px;

   }


`


function App() {


const [transactions,setTransactions] = useState([
  {id:1,text:'Momos',Amount:-20 },
  {id:2,text:'Salary',Amount:20000 },
  {id:3,text:'Book',Amount:-200 },
  {id:4,text:'Bonus',Amount:1000 }
])







  return (
    <Box className="App">
    <Header>Expense Managment</Header>
    <Component>
       <Box>
        <Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions}/>
        <NewTransactions  setTransactions={setTransactions} />
       </Box>
       <Box>
        <Transactions transactions={transactions}/>
       </Box>
    </Component>
    </Box>

  );
}

export default App;
