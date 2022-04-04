import { Table, Breadcrumb, Button, Modal, message } from "antd";
import { useState, useEffect } from "react";
import AddComment from "../components/AddComment";
import axios from "axios";

function Members() {
  const [member, setMember] = useState<any[]>([]);
  const [visible, setVisibility] = useState(false);

  const organization: any = localStorage.getItem("organization");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}orgs/${organization}/comments`)
      .then(function (params: any) {
        if (params.status === 200) {
          setMember(params.data);
        }
      });
  }, [organization]);

  const Delete = () => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}orgs/${organization}/comments`)
      .then(function (params: any) {
        if (params.status === 200) {
          message.success("Comments Deleted Successfully");
          window.location.reload();
        }
      });
  };

  const columns = [
    {
      key: "1",
      title: "Comment",
      dataIndex: "comment",
    },
    {
      key: "2",
      title: "Date Posted",
      dataIndex: "createdAt",
      render: (date: string) => <h3>{new Date(date).toDateString()}</h3>,
    },
  ];

  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item className="title">View Comment</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Button
            type="primary"
            style={{ float: "right", marginLeft: "5px" }}
            onClick={() => setVisibility(true)}
          >
            Add Comment
          </Button>
          <Button
            danger
            style={{ float: "right" }}
            onClick={() => {
              Modal.confirm({
                title: "Are you sure, you want to delete all the comments",
                okText: "Yes",
                okType: "danger",
                onOk: () => Delete(),
              });
            }}
          >
            Delete Comment
          </Button>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          background: "#fff",
          padding: 24,
          height: "100vh",
        }}
      >
        <Table columns={columns} dataSource={member}></Table>
      </div>
      {visible === true && <AddComment setVisibility={setVisibility} />}
    </div>
  );
}

export default Members;
