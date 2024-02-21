import { ListItem, ListItemText, ListItemIcon, styled } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';


const Detail = styled(ListItem)`
 margin-top:10px;


`



const Transaction = ({ transaction, setTransactions, Transactions }) => {
  const color = transaction.Amount > 0 ? 'Green' : 'Red'


  const deleteTransaction = (id) => {
    setTransactions(Transactions.filter(transaction => transaction.id !== id))
  }



  return (
    <Detail style={{ background: `${color} `, color: '#fff' }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText>
        {
          transaction.text
        }
      </ListItemText>
      <ListItemText>
        {
          transaction.Amount
        }
      </ListItemText>


    </Detail>
  )
}


export default Transaction
