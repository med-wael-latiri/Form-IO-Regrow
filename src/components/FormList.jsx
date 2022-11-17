import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { Form } from "@formio/react";

function FormList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedForm, setloadedform] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    fetch("https://formioregrow-default-rtdb.firebaseio.com/FormList.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const formList = [];
        for (const key in data) {
          const form = {
            id: key,
            ...data[key],
          };
          formList.push(form);
        }
        setIsLoading(false);

        setloadedform(formList);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title className="text-center">FormList</Card.Title>
        {loadedForm &&
          loadedForm.map((form) => {
            return (
              <Card title="Form " className="my-4">
                <Card.Body>
                  <Card.Title
                    className="text-center"
                    onClick={() => {
                      setSelectedForm(form);
                    }}
                  >
                    {form.formName}
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        {selectedForm && (
          <Form
            form={selectedForm.components}
            onSubmit={(e) => {
              console.log(e);
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default FormList;
