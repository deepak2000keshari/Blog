import React from 'react'
import EditCard from './components/EditCard'
import Grid from '@mui/material/Grid2';
function Edit() {
  return (
    // <Grid container spacing={2} sx={{ padding: 1 }}>
         <Grid>
          <EditCard paragraph = "Explore the beauty of nature with stunning landscapes and vibrant colors." title= "Beautiful Nature"/>
         </Grid>
    // </Grid>
  )
}

export default Edit
