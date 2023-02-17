import { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ArticleContext } from '../contexts/ArticleContext';
import EditForm from './EditForm';



const Article = ({article}) => {

    const {deleteArticle} = useContext(ArticleContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [article])

    return (
        <>
            <td>{article.title}</td>
            <td>{article.content}</td>
            <td>{article.date}</td>
            <td style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div style={{marginRight:"20px"}}>

                <button onClick={handleShow}  className="btn  btn-warning" data-toggle="modal">Edit</button>

                </div>
             
               <div>
               <button onClick={() => deleteArticle(article.id)}  className="btn  btn-danger" data-toggle="modal">Delete</button>

               </div>
              
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Article
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm article={article} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Article;