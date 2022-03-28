import React from "react";
import { Card, Form } from "react-bootstrap";

function FilterContent({ setFilter, filter }) {
  return (
    <div className="mt-3">
      <Card>
        <Card.Header>Search Player</Card.Header>
        <Card.Body>
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Filter By Username"
                    onChange={(e) => {
                      setFilter({ ...filter, userName: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Filter By Username
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Filter By Email"
                    onChange={(e) => {
                      setFilter({ ...filter, email: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">Filter By Email</Form.Text>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Filter By Player Exp"
                    onChange={(e) => {
                      setFilter({ ...filter, exp: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Filter By Player Exp
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Level</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Filter By Player Lvl"
                    onChange={(e) => {
                      setFilter({ ...filter, lvl: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Filter By Player Exp
                  </Form.Text>
                </Form.Group>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FilterContent;
