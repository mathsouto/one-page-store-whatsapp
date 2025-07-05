import React, { useRef, useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./partsFourSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaWhatsapp } from "react-icons/fa";

Modal.setAppElement("#root");

function PartsFourSection() {
  const [partsFour, setPartsFour] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/data/partsFour.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP: status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPartsFour(data);
      })
      .catch((error) => console.error("Erro ao buscar peças:", error));
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      prevRef.current &&
      nextRef.current
    ) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [partsFour, prevRef, nextRef]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

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
      <div className={styles.mainPartsFour}>
        <div id="pecas" className={styles.containerPartsFour}>
          <div className={styles.sliderPartsFour}>
            <div ref={prevRef} className={styles.arrowLeft}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18L9 12L15 6" />
              </svg>
            </div>
            <div className={styles.contentPartsFour}>
              {partsFour.length > 0 ? (
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  observer={true}
                  observeParents={true}
                  breakpoints={{
                    330: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    650: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    930: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                    1250: {
                      slidesPerView: 4,
                      spaceBetween: 15,
                    },
                  }}
                >
                  {partsFour.map((produto) => (
                    <SwiperSlide key={produto.id}>
                      <div className={styles.itemPartsFour}>
                        <div className={styles.infoPartsFour}>
                          <img
                            src={produto.imagem}
                            alt={produto.nome || "Peça"}
                            onClick={() => openModal(produto.imagem)}
                            style={{ cursor: "pointer" }}
                          />
                          <div className={styles.namePartsFour}>
                            <p className={styles.markNamePartsFour}>
                              {produto.marca}
                            </p>
                            <p className={styles.titleNamePartsFour}>
                              {produto.nome}
                            </p>
                          </div>
                        </div>
                        <div className={styles.pricePartsFour}>
                          <p className={styles.moedaPartsFour}>
                            R${produto.preco}
                          </p>
                          <p className={styles.parcelaPartsFour}>
                            {produto.parclQtd}x de R${produto.parclValor} sem
                            juros
                          </p>
                          <a
                            className={styles.buttonContainer}
                            href={produto.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className={styles.buttonPartsFour}>
                              <FaWhatsapp /> Confira
                            </button>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p className={styles.loadingText}>Carregando...</p>
              )}
            </div>
            <div ref={nextRef} className={styles.arrowRight}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6L15 12L9 18" />
              </svg>
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
            src={modalImage}
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              userSelect: "none",
            }}
            draggable={false}
          />
        )}
      </Modal>
    </>
  );
}

export default PartsFourSection;
