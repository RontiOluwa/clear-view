import { Table, Breadcrumb } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

function Members() {
  const [member, setMember] = useState<any[]>([]);

  const organization: any = localStorage.getItem("organization");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}orgs/${organization}/members`)
      .then(function (params: any) {
        console.log(params);
        setMember(params.data);
      });
  }, [organization]);

  const columns = [
    {
      key: "2",
      title: "ID",
      dataIndex: "email",
    },
    {
      key: "1",
      title: "Image",
      dataIndex: "avatar",
      render: (url: string) => <img alt={url} src={url} width={50} />,
    },
    {
      key: "2",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "3",
      title: "Followers",
      dataIndex: "followers",
    },
    {
      key: "4",
      title: "Following",
      dataIndex: "following",
    },
  ];
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>View Members</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: "#fff", padding: 24, height: "100vh" }}>
        <Table columns={columns} dataSource={member}></Table>
      </div>
    </div>
  );
}

export default Members;
