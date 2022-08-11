import Index from 'components/page/Index';
// import Test from 'components/common/Test';
import  { Helmet, HelmetProvider } from 'react-helmet-async';
import GlobalStyles from 'styles/globalStyles';

function App() {
  return (
    <>
    <GlobalStyles/>
    <HelmetProvider>
      <Helmet>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'/>
      </Helmet>
    </HelmetProvider>
      <Index />
      {/* <Test/> */}
    </>
  );
}

export default App;