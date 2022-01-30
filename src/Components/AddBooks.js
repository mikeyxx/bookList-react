import { useState } from 'react'

const AddBooks = ({addBooks}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [isbn, setIsbn] = useState('')
    const [alert, setAlert] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title || !author || !isbn) {
            setAlert(true)
        } else {
            addBooks({title, author, isbn})
            setAlert(false)
        }

        setTitle('')
        setAuthor('')
        setIsbn('')
    }

  return (
    <form className='form-holder' onSubmit={onSubmit}>
    {alert && <p className= {`alert ${alert && 'alert-danger'}`}>{alert && 'Please fill empty field(s)'}</p>}
        <div className='form-input'>
            <label>Title</label>
            <input type='text' placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-input'>
            <label>Author</label>
            <input type='text' placeholder='Add Author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className='form-input'>
            <label>ISBN#</label>
            <input type='text' placeholder='Add Book Number' value={isbn} onChange={(e) => setIsbn(e.target.value)} />
        </div>

        <input type="submit" value='Save Book' className='submit' />
    </form>
  );
};

export default AddBooks;
