import { useState } from "react";
import { Button, DatePicker, Divider, Form, Input, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";

function FormGeneratorPage() {
  const [generateForm, setGenerateForm] = useState(false);
  const [jsonObject, setJsonObject] = useState({});

  const [keys, setKeys] = useState(new Array());
  const [values, setValues] = useState(new Array());

  const dateFormat = "dd.MM.yyyy";

  return (
    <div>
      <TextArea
        placeholder="Enter your JSON"
        onChange={(e) => {
          setJsonObject(JSON.parse(e.target.value));
        }}
        style={{ height: 200 }}
      />
      <Button
        onClick={() => {
          setKeys(Object.keys(jsonObject));
          setValues(Object.values(jsonObject));

          setGenerateForm(true);
        }}
      >
        Generate Form
      </Button>
      <Divider>Generated Form</Divider>

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

export default FormGeneratorPage;
