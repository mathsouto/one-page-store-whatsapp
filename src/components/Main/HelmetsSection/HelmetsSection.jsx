import React, { useRef, useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./helmetsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { LuShoppingCart } from "react-icons/lu";

Modal.setAppElement("#root");

function HelmetsSection() {
  const [helmets, setHelmets] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/data/helmets.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP: status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setHelmets(data);
      })
      .catch((error) => console.error("Erro ao buscar capacetes:", error));
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
  }, [helmets, prevRef, nextRef]);

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
      <div className={styles.mainHelmets}>
        <div id="capacetes" className={styles.containerHelmets}>
          <div className={styles.titleHelmets}>
            <h2>Capacetes</h2>
            <p>Mais vendidos</p>
          </div>
          <div className={styles.sliderHelmets}>
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
            <div className={styles.contentHelmets}>
              {helmets.length > 0 ? (
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
                  spaceBetween={20}
                  slidesPerView={4}
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
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {helmets.map((produto) => (
                    <SwiperSlide key={produto.id}>
                      <div className={styles.itemHelmets}>
                        <div className={styles.infoHelmets}>
                          <img
                            alt={produto.nome || "Capacete"}
                            src={produto.imagem}
                            onClick={() => openModal(produto.imagem)}
                            style={{ cursor: "pointer" }}
                          />
                          <div className={styles.nameHelmets}>
                            <p className={styles.markNameHelmets}>
                              {produto.marca}
                            </p>
                            <p className={styles.titleNameHelmets}>
                              {produto.nome}
                            </p>
                          </div>
                          <div className={styles.priceHelmets}>
                            <p className={styles.moedaHelmets}>
                              R${produto.preco}
                            </p>
                            <p className={styles.parcelaHelmets}>
                              {produto.parclQtd}x de R${produto.parclValor} sem
                              juros
                            </p>
                          </div>
                        </div>
                        <a
                          className={styles.buttonContainer}
                          href={produto.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className={styles.buttonHelmets}>
                            <LuShoppingCart /> Comprar
                          </button>
                        </a>
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
            alt=""
            src={modalImage}
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

export default HelmetsSection;
