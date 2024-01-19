import React from 'react'
import { Data } from '../Data'
import { nanoid } from 'nanoid'

const Books = () => {
    const [userBookName, setUserBookName] = React.useState('')
    const [bookdata, setBookdata] = React.useState(Data)
    const [isBookAdded, setisBookAdded] = React.useState(false)
    const [isBookDeleted, setIsBookDeleted] = React.useState(false)
    const [modalMessage, SetModalMessage] = React.useState('')


    function handleSubmit(e) {
        e.preventDefault()
        alert(userBookName)
        setisBookAdded(true)
        setBookdata(prevBook => {
            return [
                ...prevBook,
                {
                    id: nanoid(),
                    bookName: userBookName,
                    authorName: 'Unknown',
                }
            ]
        })
        console.log(bookdata)
        setUserBookName('')
    }
    function handleDelete(id) {
        const booksAfterDeletion = bookdata.filter(book => book.id !== id)
        setBookdata(booksAfterDeletion)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your book name" onChange={(e) => setUserBookName(e.target.value)} />
                <button type="submit">Add Your Book</button>
            </form>

            {
                bookdata.map(book => {
                    return <div key={nanoid()}>
                        <ul>
                            <li>
                                <>
                                    <h2>{book.bookName}</h2>
                                    <p>{book.authorName}</p>
                                </>
                                <button className="dlt-btn" onClick={() => handleDelete(book.id)}>Delete</button>
                            </li>
                        </ul>
                    </div >
                })
            }
        </>
    )

}

export default Books