import Button from 'antd/es/button/button';
import Card from 'antd/es/card/Card';
import './App.css'
import Link from 'antd/es/typography/Link';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export default function SiteContent() {
  return (
    <div className="space-y-6 px-[10vw] pt-6">
      <Button
        href="https://github.com/mcassels"
        target="_blank"
      >
        <div><GithubOutlined className="pr-2" />Github</div>
      </Button>
      <Card className="max-w-fit" title="Get in touch">
        <ul>
          <li key="email">Email me: <Link href="mailto:morgan@morganbrooks.io">morgan@morganbrooks.io</Link></li>
          <li>Say hi on <Link href="https://www.linkedin.com/in/morganjbrooks/" target="_blank">LinkedIn <LinkedinOutlined /></Link></li>
        </ul>
      </Card>
    </div>
  );
}