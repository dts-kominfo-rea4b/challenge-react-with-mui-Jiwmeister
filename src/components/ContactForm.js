// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export const ContactForm = ({ handleSubmit }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [newContact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    photo: ''
  })

  const contactInput = (el) => {
    const value = el.target.value

    setContact({ ...newContact, [el.target.id]: value })
  }

  return (
    <Card variant="outlined" sx={{ padding: '20px' }}>
      <TextField
        required
        id="name"
        label="Name"
        variant="filled"
        value={newContact.name}
        onChange={contactInput}
        fullWidth
        sx={{marginBottom: '15px'}}
      />
      <TextField
        required
        id="phone"
        label="Phone"
        variant="filled"
        value={newContact.phone}
        onChange={contactInput}
        fullWidth
        sx={{marginBottom: '15px'}}
      />
      <TextField
        required
        id="email"
        label="Email"
        variant="filled"
        value={newContact.email}
        onChange={contactInput}
        fullWidth
        sx={{marginBottom: '15px'}}
      />
      <TextField
        required
        id="photo"
        label="Image URL"
        variant="filled"
        value={newContact.photo}
        onChange={contactInput}
        fullWidth
        sx={{marginBottom: '15px'}}
      />
      <Button variant="contained" color="success" onClick={() => handleSubmit(newContact)}>Add New Contact</Button>
      {/* <CardActions>
      </CardActions> */}
    </Card>
  );
}
