import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import AddContent from "./add-content/AddContent";
import FilterContent from "./filter-content/FilterContent";
import TableContent from "./table-content/TableContent";

const getDataFromLS = () => {
  const data = localStorage.getItem("players");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Content() {
  const [players, setPlayers] = useState(
    getDataFromLS(),
    new Array().fill(null).map((data, index) => {
      const key = index + 1;
      return {
        id: key,
        userName: "",
        email: "",
        password: "",
        exp: "",
        lvl: "",
      };
    })
  );

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);
  // untuk show modal add Player
  const [showAddModal, setShowAddModal] = useState(false);
  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);
  // untuk filter player
  const [filter, setFilter] = useState({
    userName: "",
    email: "",
    exp: "",
    lvl: "",
  });

  const [filteredPlayers, setFilteredPlayers] = useState([]);
  // filter berdasarkan username, email dan exp
  const filteredSearch = () => {
    if (filter.userName && filter.exp && filter.email && filter.lvl) {
      setFilteredPlayers(
        players.filter(
          (item) =>
            item.userName == filter.userName &&
            item.exp == filter.exp &&
            item.email == filter.email &&
            item.lvl == filter.lvl
        )
      );
    } else if (filter.userName) {
      setFilteredPlayers(
        players.filter((item) => item.userName == filter.userName)
      );
    } else if (filter.exp) {
      setFilteredPlayers(players.filter((item) => item.exp == filter.exp));
    } else if (filter.email) {
      setFilteredPlayers(players.filter((item) => item.email == filter.email));
    } else if (filter.lvl) {
      setFilteredPlayers(players.filter((item) => item.lvl == filter.lvl));
    } else {
      // apabila tidak ada filter maka tampilkan seluruh player
      setFilteredPlayers(players);
    }
  };
  // fungsi untuk menampilkan player yang di filter, fungsi trigger untuk menampilkan all player
  useEffect(() => {
    filteredSearch();
  }, [filter, players]);

  return (
    <div>
      <Container fluid="md">
        <FilterContent setFilter={setFilter} filter={filter} />
        <TableContent
          players={filteredPlayers}
          handleShow={handleShowAddModal}
          setPlayers={setPlayers}
        />
      </Container>
      <AddContent
        show={showAddModal}
        handleClose={handleCloseAddModal}
        setPlayers={setPlayers}
      />
    </div>
  );
}

export default Content;
