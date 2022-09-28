import React, { useEffect, useState } from "react"
import './App.css'
import './components/Contact.css'

import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'

import { Contact } from "./components/Contact"
import { Header } from "./components/Header"

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json'
import { ContactForm } from "./components/ContactForm"
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON)

  useEffect(() => {
    document.title = 'Contact App'
    console.log(contacts);
  })

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Header />
      <div className="list-wrapper">
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid md={6}>
              <Item>
                <ContactForm handleSubmit={addContact} />
              </Item>
            </Grid>
            <Grid md={4}>
              <Item>
                <Contact data={contacts} />
              </Item>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default App;
