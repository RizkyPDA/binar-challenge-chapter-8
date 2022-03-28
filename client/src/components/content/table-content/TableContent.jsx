import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditContent from "./edit-content/EditContent";
import DeleteContent from "./delete-content/DeleteContent";

function TableContent({ players, handleShow, setPlayers }) {
  const [currentId, setCurrentId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("");
  const [lvl, setLvl] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  const handleShowEditModal = (id, userName, email, password, exp, lvl) => {
    setCurrentId(id);
    setUserName(userName);
    setEmail(email);
    setPassword(password);
    setExp(exp);
    setLvl(lvl);
    setShowEditModal(true);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleShowDeleteModal = (id) => {
    setCurrentId(id);
    setShowDeleteModal(true);
  };

  const editPlayer = () => {
    const productList = [...players];
    const index = productList.findIndex((item) => item.id === currentId);
    productList[index].userName = userName;
    productList[index].email = email;
    productList[index].password = password;
    productList[index].exp = exp;
    productList[index].lvl = lvl;
    setPlayers(productList);
    setShowEditModal(false);
  };

  const deleteProduct = () => {
    const productDelete = players.filter((item) => item.id !== currentId);
    setPlayers(productDelete);
    setShowDeleteModal(false);
  };
  const columns = [
    {
      dataField: "id",
      text: "Player ID",
    },
    {
      dataField: "userName",
      text: "Player Username",
    },
    {
      dataField: "email",
      text: "Player Email",
    },
    {
      dataField: "password",
      text: "Player Password",
    },
    {
      dataField: "exp",
      text: "Player Exp",
      formatter: (cell, row) => {
        return cell;
      },
    },
    {
      dataField: "lvl",
      text: "Player Lvl",
      formatter: (cell, row) => {
        return cell;
      },
    },

    {
      dataField: "",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Edit Player</Tooltip>}
            >
              <Button
                variant="none"
                onClick={() => {
                  handleShowEditModal(
                    row.id,
                    row.userName,
                    row.email,
                    row.password,
                    row.exp,
                    row.lvl
                  );
                }}
              >
                <FaEdit color="orange" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Delete Player</Tooltip>}
            >
              <Button
                variant="none"
                onClick={() => {
                  handleShowDeleteModal(row.id);
                }}
              >
                <FaTrashAlt color="red" />
              </Button>
            </OverlayTrigger>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mt-3">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          Player List
          <Button variant="dark" onClick={handleShow}>
            Add Player
          </Button>
        </Card.Header>
        <Card.Body>
          <BootstrapTable
            keyField="id"
            data={players}
            columns={columns}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>
      <EditContent
        show={showEditModal}
        handleClose={handleCloseEditModal}
        userName={userName}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        exp={exp}
        setExp={setExp}
        lvl={lvl}
        setLvl={setLvl}
        editPlayer={editPlayer}
      />

      <DeleteContent
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default TableContent;
