// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
export const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} dense>
      {data.map((contact, index) => {
        return (
          <ListItem key={index} alignItems="flex-start" disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline-block' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {contact.phone}
                      <br />
                      {contact.email}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  );
};
