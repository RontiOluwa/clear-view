import { useState } from "react";
import { Modal, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

function Organization() {
  const [organization, setOrganization] = useState("");
  let navigate = useNavigate();

  const handleChange = (value: string) => {
    setOrganization(value);
  };

  const submit = () => {
    console.log(organization);
    if (organization !== "") {
      localStorage.setItem("organization", organization);
      navigate(`members`);
    } else {
      message.error("Please Select an Organization");
    }
  };

  return (
    <Modal
      title="Select Organization"
      visible={true}
      okText="Save"
      onCancel={() => {
        window.location.reload();
      }}
      onOk={() => submit()}
    >
      <p>Please select an Organization</p>
      <Select defaultValue="" style={{ width: "100%" }} onChange={handleChange}>
        <Option value="" disabled>
          Select Organization
        </Option>
        <Option value="fsociety">Fsociety</Option>
        <Option value="ecorp">Ecorp</Option>
      </Select>
    </Modal>
  );
}

export default Organization;
