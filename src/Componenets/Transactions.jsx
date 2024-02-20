import { Box, Typography,Divider, List } from "@mui/material"
import Transaction from "./Transaction"






const Transactions=({transactions})=> {
  return (
   <Box>
    <Typography variant="h5">Transactions History</Typography>
    <Divider/>
   <List>
      {
        transactions.map(transactions=>(
            <Transaction transaction={transactions}/>
        ))
      }
   </List>
   </Box>
  )
}



export default Transactions