import Layout, { Header } from 'antd/es/layout/Layout';
import './App.css'
import SiteContent from './SiteContent';

function App() {
  return (
    <Layout className="h-screen">
      <Header className="py-8 px-[10vw] bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-fit flex justify-between text-white">
        <div>
          <h1 className="text-6xl font-light">Morgan Brooks</h1>
          <p className="text-lg pt-4">Software Engineer</p>
        </div>
      </Header>
      <SiteContent />
    </Layout>
  );
}

export default App
