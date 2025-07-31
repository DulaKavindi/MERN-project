import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function UsersTable(props) {
  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
              {
              props.rows.length > 0 ?
              props.rows.map(row => (
                <TableRow key={row.id} sx={{'&.last-child td, &:last-child th' : {border:0}}}>
                  <TableCell component='th' scope="row"> {row.id} </TableCell>
                  <TableCell component='th' scope="row"> {row.name} </TableCell>
                  <TableCell>
                    <Button sx={{
                      margin:'0px 10px'
                    }}
                    onClick={()=>{}}>

                    Update</Button>

                    <Button sx={{
                      margin:'0px 10px'
                    }}
                    onClick={()=>{}}>

                    Delete</Button>
                  </TableCell>
                </TableRow>
              ))
              : ( <TableRow sx={{'&.last-child td, &:last-child th' : {border:0}}}>
                    <TableCell component='th' scope="row"> NO Data</TableCell>
                  </TableRow>)
            }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default UsersTable