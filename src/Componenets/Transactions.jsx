import { Box, Typography,Divider, List } from "@mui/material"
import Transaction from "./Transaction"






const Transactions=({transactions,setTransactions})=> {
  return (
   <Box>
    <Typography variant="h5">Transactions History</Typography>
    <Divider/>
   <List>
      {
        transactions.map(transactions=>(
            <Transaction transaction={transactions} setTransactions={setTransactions} transactions={transactions}/>
        ))
      }
   </List>
   </Box>
  )
}



export default Transactions