import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
function Sidebar() {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
        <Menu.Item key="Members">
          <Link to="members">Members</Link>
        </Menu.Item>
        <Menu.Item key="Comments">
          <Link to="comments">Comments</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
