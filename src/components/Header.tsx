import "antd/dist/antd.css";
import { Layout, Avatar, Menu, Breadcrumb, Button } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Content, Footer, Sider } = Layout;
function Headers() {
  return (
    <Header style={{ padding: 10 }}>
      <Avatar style={{ float: "right" }} src="./dp.png" />
      <Title style={{ color: "white" }} level={3}>
        Clear View
      </Title>
    </Header>
  );
}

export default Headers;
