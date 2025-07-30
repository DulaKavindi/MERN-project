import React from 'react'
import { Button, Grid, Input, Typography} from "@mui/material";

function UserForm(props) {
  return (
   <Grid
    container
    spacing={2}
    sx={{
        backgrounColor: 'white',
        marginBottom: '20px',
        display: 'block',
    }}>
        <Grid item xs={12}>
            <Typography component={'h1'} 
            sx={{color: '#000000',
                fontSize: '40px'
            }}>User Form</Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
            <Typography component={'label'}
            htmlFor="id"
            sx={{
                color: '#000000',
                marginRight: '20px',
                width: '100px',
                display: 'block',
            }}>ID</Typography>

            <Input
                type ="number"
                id='id'
                name="id"
                sx={{
                    width: '400px'
                }}
                value={''}
                onChange={e => {}}/>
        </Grid>

        <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
            <Typography component={'label'}
            htmlFor="id"
            sx={{
                color: '#000000',
                marginRight: '20px',
                width: '100px',
                display: 'block'
            }}>Name</Typography>

            <Input
                type ="text"
                id='name'
                name="name"
                sx={{
                    width: '400px'
                }}
                value={''}
                onChange={e => {}}/>
        </Grid>

        <Button sx={{
            margin:'auto',
            marginBottom: '20px',
            backgroundColor: '#000000',
            marginLeft: '15px',
            marginTop: '20px',

            '&:hover': {
                opacity: '0.7',
                backgroundColor: '#00c6e6',
            }
        }}> Add </Button>
    
   </Grid>
  )
}

export default UserForm