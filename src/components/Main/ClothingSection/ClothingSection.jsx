import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./clothingSection.module.css";
import { FaWhatsapp } from "react-icons/fa";

Modal.setAppElement("#root");

function ClothingSection() {
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    fetch("/data/clothing.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP: status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setClothing(data);
      });
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [sortType, setSortType] = useState("");

  function getSortedClothing() {
    const sorted = [...clothing];

    switch (sortType) {
      case "maior-preco":
        return sorted.sort((a, b) => parseFloat(b.preco) - parseFloat(a.preco));
      case "menor-preco":
        return sorted.sort((a, b) => parseFloat(a.preco) - parseFloat(b.preco));
      case "alfabetica":
        return sorted.sort((a, b) =>
          a.nome
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .localeCompare(
              b.nome
                .trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            )
        );
      case "marca":
        return sorted.sort((a, b) =>
          a.marca
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .localeCompare(
              b.marca
                .trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            )
        );
      default:
        return clothing;
    }
  }

  function openModal(image) {
    setModalImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalImage(null);
  }

  return (
    <>
      <div className={styles.mainClothing}>
        <div id="vestuario" className={styles.containerClothing}>
          <div className={styles.menuClothing}>
            <div className={styles.titleClothing}>
              <h2>Vestuario</h2>
            </div>
            <div className={styles.orderContainerClothing}>
              <p className={styles.orderTextCloting}>Ordenar por</p>
              <select
                className={styles.orderWrapperClothing}
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="">Padrão</option>
                <option value="marca">Marca</option>
                <option value="maior-preco">Maior preço</option>
                <option value="menor-preco">Menor preço</option>
                <option value="alfabetica">Ordem alfabética</option>
              </select>
            </div>
          </div>
          <div className={styles.contentClothing}>
            <div className={styles.gridClothing}>
              {getSortedClothing().map((produto, index) => (
                <div className={styles.itemClothing} key={index}>
                  <div className={styles.infoClothing}>
                    <img
                      src={produto.imagem}
                      alt=""
                      onClick={() => openModal(produto.imagem)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className={styles.nameClothing}>
                      <p className={styles.markNameClothing}>{produto.marca}</p>
                      <p className={styles.titleNameClothing}>{produto.nome}</p>
                    </div>
                  </div>
                  <div className={styles.priceClothing}>
                    <p className={styles.moedaClothing}>R${produto.preco}</p>
                    <p className={styles.parcelaClothing}>
                      {produto.parclQtd}x de R${produto.parclValor} sem juros
                    </p>
                    <a
                      className={styles.buttonContainer}
                      href={produto.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.buttonClothing}>
                        <FaWhatsapp /> Confira
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagem Ampliada"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            minWidth: "300px",
            minHeight: "200px",
            maxWidth: "90vw",
            maxHeight: "90vh",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{
            alignSelf: "flex-end",
            cursor: "pointer",
            fontSize: "1.5rem",
            border: "none",
            background: "none",
          }}
          aria-label="Fechar modal"
        >
          &times;
        </button>
        {modalImage && (
          <img
            alt=""
            src={modalImage}
            style={{
              maxWidth: "100%", // Garante que a imagem não saia da largura do modal
              maxHeight: "100%", // Permite que a imagem ocupe a altura total disponível no modal
              objectFit: "contain", // Redimensiona a imagem para caber, mantendo a proporção
              userSelect: "none",
            }}
            draggable={false}
          />
        )}
      </Modal>
    </>
  );
}

export default ClothingSection;
