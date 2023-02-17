import { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ArticleContext } from '../contexts/ArticleContext';
import AddForm from './AddForm';
import Article from './Article';

const ArticleList = () => {

    const {sortedArticles} = useContext(ArticleContext);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [sortedArticles])

    return (
    <>
    <div className="table-title">
        <div className="row">
            
            <div className="col-sm-12">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><span>Add New Article</span></Button>					
            </div>
        </div>
    </div>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

                {
                  sortedArticles.map(item => (
                      <tr key={item.id}>
                        <Article article={item} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

   

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Article
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
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

export default ArticleList;