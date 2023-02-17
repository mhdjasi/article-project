import ArticleList from './components/ArticleList';
import ArticleContextProvider from './contexts/ArticleContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <ArticleContextProvider>
            <ArticleList />
          </ArticleContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
