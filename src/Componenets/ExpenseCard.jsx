import { Box , Card, Typography,CardContent } from "@mui/material"


const ExpenseCard = ()=> {
  return (
    <Box>
        <Card>
            <CardContent>
                <Typography>
                    Income:
                </Typography>
                <Typography style={{color:'green'}}>25</Typography>

            </CardContent>
        </Card>

        <Card>
            <CardContent>
                <Typography>
                    Expense:
                </Typography>
                <Typography style={{color:'red'}}>15</Typography>

            </CardContent>
        </Card>

    </Box>
  )
}


export default ExpenseCard