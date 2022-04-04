import { useState } from "react";
import { Modal, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddComment({ setVisibility }: any) {
  const [comment, setComment] = useState("");
  const organization: any = localStorage.getItem("organization");

  const submit = () => {
    console.log(comment);
    if (comment !== "") {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}orgs/${organization}/comments`,
          { comment }
        )
        .then(function name(params: any) {
          if (params.status == 200) {
            message.success("Comment Posted Successfully");
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        });
    } else {
      message.error("Please Fill Up the Field");
    }
  };

  return (
    <Modal
      title="Add a Comment"
      visible={true}
      okText="Save"
      onCancel={() => {
        setVisibility(false);
      }}
      onOk={() => submit()}
    >
      <p>Enter a comment</p>
      <Input
        placeholder="Enter a comment"
        defaultValue={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
    </Modal>
  );
}

export default AddComment;
