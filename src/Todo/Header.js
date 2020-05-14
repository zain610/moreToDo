import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    top: "25%",
    left: "25%",
    right: "25%",
    bottom: "25%",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  },
  overlay: {
    position: "absolute",
    top: "25%",
    left: "25%",
    right: "25%",
    bottom: "25%",
    backgroundColor: "rgba(255, 255, 255, 0.25)"
  }
};
Modal.setAppElement("#root");
export default function Header(props) {
  //create a hook for toggling the modal state
  const [modalIsOpen, setIsOpen] = React.useState(false);
  //create a hook for preserving title and body content of the form
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const onChangeHandler = e => {
    const nodeName = e.target.name;
    const nodeValue = e.target.value;
    switch (nodeName) {
      case "title":
        console.log("title was enteredd");
        setTitle(nodeValue);
        break;
      case "body":
        console.log("body was clicked");
        setBody(nodeValue);
        break;
    }
  };
  const handleSubmit = () => {
    //close modal and send the data to the parent component
    closeModal();
    props.addTodo(title, body);
  };
  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-around" }}
    >
      <input
        onChange={props.todoFilterOnChange}
        placeholder="Search Something..."
        style={{
          border: "none",
          backgroundColor: "transparent",
          outline: "0",
          width: "80%",
          padding: "0.5rem",
          fontSize: "x-large"
        }}
      />
      <div style={{ "border-left": "2px solid #333", margin: "5px 0 0 5px" }} />
      <FontAwesomeIcon
        style={{
          fontSize: "2rem",
          padding: "10px 10px 0 10px",
          color: "mediumpurple"
        }}
        onClick={openModal}
        icon={faPlus}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            opacity: "1.25",
            backgroundColor: "rgba(255, 255, 255, 0.25)"
          },
          content: {
            color: "lightsteelblue",
            position: "absolute",
            top: "10%",
            right: "30%",
            left: "30%",
            bottom: "20%",
            justifyContent: "space-between",
            border: "10px solid lightsteelblue"
          }
        }}
      >
        <div style={{ margin: "0.75rem", borderBottom: "2px solid #333" }}>
          <input
            onChange={onChangeHandler}
            name="title"
            placeholder="Enter Title"
            style={{
              border: "none",
              backgroundColor: "transparent",
              outline: "0",
              width: "80%",
              padding: "0.5rem",
              fontSize: "x-large"
            }}
          />
        </div>
        <div
          style={{
            margin: "0.75rem",
            borderBottom: "2px solid #333",
            height: "60%"
          }}
        >
          <textarea
            onChange={onChangeHandler}
            name="body"
            placeholder="Enter Body"
            style={{
              border: "none",
              backgroundColor: "transparent",
              outline: "0",
              width: "90%",
              padding: "0.5rem",
              fontSize: "x-large",
              height: "90%"
            }}
          />
        </div>
        <button onClick={handleSubmit} class="submit-btn">
          Submit
        </button>
      </Modal>
    </div>
  );
}
