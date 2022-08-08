import Index from 'components/page/Index';
import Helmet from 'react-helmet';
import GlobalStyles from 'styles/globalStyles';

function App() {
  return (
    <>
    <GlobalStyles/>
      <Helmet>
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'/>
      </Helmet>
      <Index/>
    </>
  );
}

export default App;