import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to set the app element for accessibility
Modal.setAppElement('#__next');

const GalleryPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ src: '', title: '', description: '' });

  const openModal = (item: { src: string; title: string; description: string }) => {
    setModalContent(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const galleryItems = [
    {
      src: '/images/project1.jpg',
      title: 'Project 1',
      description: 'Description for project 1.',
    },
    {
      src: '/images/project2.jpg',
      title: 'Project 2',
      description: 'Description for project 2.',
    },
    // Add more items here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1>
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            <img src={item.src} alt={item.title} />
            <div className="overlay">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-backdrop"
        contentLabel="Project Details"
      >
        <span onClick={closeModal} className="modal-close">&times;</span>
        <img src={modalContent.src} alt={modalContent.title} />
        <h2>{modalContent.title}</h2>
        <p>{modalContent.description}</p>
      </Modal>
    </div>
  );
};

export default GalleryPage;