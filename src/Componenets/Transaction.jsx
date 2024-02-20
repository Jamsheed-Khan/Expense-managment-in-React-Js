import { ListItem, ListItemText,styled } from "@mui/material"

const Detail = styled(ListItem)`
 margin-top:10px;


`



const Transaction = ({transaction}) => {
  const color = transaction.Amount > 0 ? 'Green':'Red'




  return (
    <Detail style={{background:`${color} `,color:'#fff'}}>
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
