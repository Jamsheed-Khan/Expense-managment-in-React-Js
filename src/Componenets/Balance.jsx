import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"



const BalanceText = styled(Typography)`
 font-size:25px;
 margin-bottom:20px; 
`


const Balance= ({transactions})=>{

const Amount = transactions.map(transactions => transactions.Amount);
const total = Amount.reduce((Amount,item)=>(Amount+=item),0).toFixed(2)

    return(
     <Box>

<Typography>Balance:{total}.PKR</Typography>
     </Box>



    )
}

export default Balance