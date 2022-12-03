import React from "react";
import { useState } from "react";
import { Form, Input, Button, Checkbox, Switch, DatePicker } from "antd";

function Formator() {
  const [generateForm, setGenerateForm] = useState(false);
  const [jsonObject, setJsonObject] = useState({});

  const [keys, setKeys] = useState(new Array());
  const [values, setValues] = useState(new Array());

  const dateFormat = "dd.MM.yyyy";

  return (
    <div>
      <Form.Item
        label="Enter your JSON"
        name="username"
        rules={[{ required: true, message: "Please input your JSON!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            setKeys(Object.keys(jsonObject));
            setValues(Object.values(jsonObject));

            setGenerateForm(true);
          }}
        >
          Submit
        </Button>
      </Form.Item>

      {generateForm && (
        <Form initialValues={jsonObject}>
          {keys.map((key: string, index: number) => {
            return typeof values[index] == "string" ? (
              <Form.Item name={key} label={key}>
                <Input />
              </Form.Item>
            ) : typeof values[index] == "boolean" ? (
              <Form.Item name={key} label={key} valuePropName="checked">
                <Switch />
              </Form.Item>
            ) : typeof values[index] == "number" ? (
              <Form.Item label={key} name={key}>
                <Input />
              </Form.Item>
            ) : values[index] instanceof Date ? (
              <Form.Item label={key} name={key}>
                <DatePicker format={dateFormat.toString} />
              </Form.Item>
            ) : null;
          })}
        </Form>
      )}
    </div>
  );
}

export default Formator;
