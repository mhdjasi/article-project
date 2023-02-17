import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ArticleContext = createContext()

const ArticleContextProvider  = (props) => {

    const [articles, setArticles] = useState([
        {id:uuidv4(), title: 'title 1', content: 'content 1', date: '05/01/2023'},
        {id:uuidv4(), title: 'title 2', content: 'content 2', date: '10/01/2023'},
        {id:uuidv4(), title: 'title 3', content: 'content 3', date: '15/01/2023'},
        {id:uuidv4(), title: 'title 3', content: 'content 4', date: '20/01/2023'},
    ])

useEffect(()=> {
    setArticles(JSON.parse(localStorage.getItem('articles')))
},[])

useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
})

const sortedArticles = articles;

const addArticle = (title, content, date) => {
    setArticles([...articles , {id:uuidv4(), title, content, date}])
}

const deleteArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id))
}

const updateArticle = (id, updatedArticle) => {
    setArticles(articles.map((article) => article.id === id ? updatedArticle : article))
}

    return (
        <ArticleContext.Provider value={{sortedArticles, addArticle, deleteArticle, updateArticle}}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export default ArticleContextProvider;