import React from 'react'
import { Data } from '../Data'
import { nanoid } from 'nanoid'

const Books = () => {
    const [userBookName, setUserBookName] = React.useState('')
    const [bookdata, setBookdata] = React.useState(Data)


    function handleSubmit(e) {
        e.preventDefault()
        alert(userBookName)

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
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your book name" onChange={(e) => setUserBookName(e.target.value)} />
                <button type="submit">Add Your Book</button>
            </form>

            {
                bookdata.map(book => {
                    return <div>
                        <ul>
                            <li>
                                <>
                                    <h2>{book.bookName}</h2>
                                    <p>{book.authorName}</p>
                                </>
                                <button className="dlt-btn">Delete</button>
                            </li>
                        </ul>
                    </div >
                })
            }
        </>
    )

}

export default Books