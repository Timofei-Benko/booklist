import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';
import Booklist from "./components/Booklist";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField'

function App() {

    let [books, setBooks] = useState([
        {
            id: 0,
            isRead: false,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
        },
        {
            id: 1,
            isRead: false,
            title: "The Lord of the Flies",
            author: "William Golding",
        },
        {
            id: 2,
            isRead: false,
            title: "We",
            author: "Evgeniy Zamyatin",
        },
    ])

    let [authorsDisplay, setAuthorsDisplay] = useState(true)
    let [title, setTitle] = useState('')
    let [author, setAuthor] = useState('')

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const cardStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '500px',
        margin: '20px',
        padding: '20px',
        cursor: 'pointer',
    }

    const setAsRead = (id) => {
        let bookList = [...books]
        bookList[id].isRead = !bookList[id].isRead;
        setBooks(bookList)
    }

    const hideAuthors = () => {
        setAuthorsDisplay(false)
    }

    const showAuthors = () => {
        setAuthorsDisplay(true)
    }

    const getTitle = (ev) => setTitle(ev.target.value)
    const getAuthor = (ev) => setAuthor(ev.target.value)

    const addBook = () => {
        let bookTitle = title
        let bookAuthor = author

        if (!bookTitle || !bookAuthor) {
            return
        }

        let bookList = [...books]
        bookList.push(
            {
                id: bookList.length,
                isRead: false,
                title: bookTitle,
                author: bookAuthor,
            }
        )

        setBooks(bookList)
    }

    let bookList = books.map((book, index) => {
        return (
            <Booklist
                classNameToDisable={ book.isRead ? 'disabled' : '' }
                key={index}
                author={authorsDisplay && book.author}
                title={book.title}
                onCardClick={ () => setAsRead(book.id) }
            />
        )
    })

    return (
        <div style={divStyle}>

            <Card style={cardStyle}>
                <Button onClick={hideAuthors} variant="contained">Hide Authors</Button>
                <Button onClick={showAuthors} variant="contained">Show Authors</Button>
            </ Card>

            {bookList}

            <Card style={cardStyle}>
                <TextField onChange={getTitle} id="standard-basic" label="Book title" />
                <TextField onChange={getAuthor} id="standard-basic" label="Book author" />
                <Button onClick={addBook} variant="contained">Add</Button>
            </ Card>

        </div>
    );
}

export default App;
