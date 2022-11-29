import React, { FC, useContext, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { ThemeContext,NavigationItem } from '../../App';
import styles from './SearchModal.module.css';
interface SearchModalProps {
  showSearch: boolean;
  setShowSearch: (showSearch : boolean) => void;
}

const SearchModal: FC<SearchModalProps> = ({showSearch, setShowSearch}) => {
  const {navigationItems} = useContext(ThemeContext);
  const [searchText, setSearchText] = useState("");
  return (
    <Modal show={showSearch} onHide={() => setShowSearch(false)}>
      <Form.Control
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
        style={{borderRadius: 0}}
              type="email"
              placeholder="search"
              autoFocus
            />
      <Modal.Body>
        {navigationItems.filter(i => i.title.toUpperCase().startsWith(searchText.toUpperCase())).map((item, index) => (
          <SearchItem item={item} key={index} setShowSearch={setShowSearch} />
        ))}
      </Modal.Body>
    </Modal>
  );
};

const SearchItem = ({item, setShowSearch} : {item: NavigationItem, setShowSearch: (showSearch: boolean) => void}) => {
  let navigate = useNavigate();
  return (<Container onClick={() => { setShowSearch(false); navigate(item.path);}} style={{padding: 5}} className={styles.searchItem}>
            <div>{item.title}</div>
            <div style={{fontSize: 13, color: "darkgray"}}>{item.description}</div>
          </Container>
    )
}

export default SearchModal;
