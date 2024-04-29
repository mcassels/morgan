import { Button, Card, Layout } from 'antd'
import './App.css'
import { Content, Header } from 'antd/es/layout/layout'
import Link from 'antd/es/typography/Link';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

function App() {
  return (
    <Layout className="h-screen">
      <Header className="py-8 px-[10vw] bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-fit flex justify-between text-white">
        <div>
          <h1 className="text-6xl font-light">Morgan Brooks</h1>
          <p className="text-lg pt-4">Software Engineer</p>
        </div>
      </Header>
      <Content className="bg-white space-y-6 px-[10vw] pt-6">
        <Button
          href="https://github.com/mcassels"
          target="_blank"
        >
          <div><GithubOutlined className="pr-2" />Github</div>
        </Button>
        <Card className="max-w-fit" title="Get in touch">
          <ul>
            <li key="email">Email me: <Link href="mailto:morgan@morganbrooks.io" target="_blank">morgan@morganbrooks.io</Link></li>
            <li>Say hi on <Link href="https://www.linkedin.com/in/morganjbrooks/" target="_blank">LinkedIn <LinkedinOutlined /></Link></li>
          </ul>
        </Card>
      </Content>
    </Layout>
  );
}

export default App
