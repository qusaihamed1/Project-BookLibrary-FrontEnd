import React, { useState } from 'react';

const Arrivals = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const arrivalsData = [
    { image: '/images/p1.jpg', title: 'New Arrivals: PERCY JACKSON AND THE LIGHTNING THIEF', description: 'This is the first book in the Percy Jackson series, where Percy discovers he is a demigod.' },
    { image: '/images/p2.jpg', title: 'New Arrivals: THE GIVER LOIS LOWRY', description: 'A dystopian novel where Jonas is chosen to be the Receiver of Memory in a society that suppresses emotions.' },
    { image: '/images/p3.jpg', title: 'New Arrivals: THE WRIGHT BROTHERS', description: 'A historical account of the Wright brothers, their inventions, and their journey to invent the airplane.' },
    { image: '/images/p4.jpg', title: 'New Arrivals: RADICAL GARDENING', description: 'A guide to unconventional gardening techniques to create sustainable and eco-friendly gardens.' },
    { image: '/images/p5.jpg', title: 'New Arrivals: RED QUEEN', description: 'In a world divided by blood, the story follows Mare Barrow, a young woman with extraordinary powers.' },
    { image: '/images/p6.jpg', title: 'New Arrivals: HARPER LEE TO KILL A MOCKINGBIRD', description: 'A classic novel that explores themes of racism, morality, and justice in the American South.' },
    { image: '/images/p7.jpg', title: 'New Arrivals: Harry Potter AND THE PHILOSOPHER S STONE', description: 'The first book in the Harry Potter series, where Harry discovers he is a wizard and begins his magical journey.' },
    { image: '/images/p8.jpg', title: 'New Arrivals: HEROES OF OLYMPUS THE LOST HERO', description: 'The first book in the Heroes of Olympus series, where new heroes embark on a quest to save the world.' },
    { image: '/images/p9.jpg', title: 'New Arrivals: DIARY of a Wimpy Kid SQUID GAME', description: 'A hilarious story about a middle schooler navigating the challenges of growing up, with a twist from the Squid Game phenomenon.' },
    { image: '/images/p10.jpg', title: 'New Arrivals: RANGER S APPRENTICE', description: 'Follow the adventures of Will, an apprentice in the Ranger Corps, as he trains to defend the kingdom from evil forces.' },
  ];

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div
      className="arrivals"
      style={{
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        marginBottom: '50px',
      }}
    >
      <h1 style={{ fontSize: '50px', textAlign: 'center', marginBottom: '35px' }}>New Arrivals</h1>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search books..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: '450px',
              height: '50px',
              padding: '10px 20px',
              borderRadius: '25px 0 0 25px',
              border: '2px solid #d4e2d4',
              background: 'linear-gradient(135deg, #f3f9f3, #e0f7f0)',
              fontSize: '16px',
              color: '#333',
              outline: 'none',
              transition: 'box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
            }}
          />
          <button
            style={{
              height: '50px',
              padding: '10px 30px',
              borderRadius: '0 25px 25px 0',
              border: 'none',
              background: 'linear-gradient(135deg, #4caf93, #3b8567)',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div
        className="arrivals_box"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gridGap: '20px',
        }}
      >
        {arrivalsData
          .filter((arrival) => arrival.title.toLowerCase().includes(searchText.toLowerCase()))
          .map((arrival, index) => (
            <div
              className="arrivals_card"
              key={index}
              style={{
                width: '100%',
                maxWidth: '300px',
                textAlign: 'center',
                padding: '10px',
                border: '1px solid #919191',
                margin: 'auto',
              }}
            >
              <div
                className="arrivals_image"
                style={{
                  width: '180px',
                  height: '260px',
                  margin: '0 auto',
                  cursor: 'pointer',
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={arrival.image}
                  alt={arrival.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: '0.3s',
                  }}
                />
              </div>
              <div
                className="arrivals_tag"
                style={{
                  fontFamily: 'queen of camelot',
                  fontSize: '20px',
                  margin: '20px ',
                }}
              >
                <p style={{ margin: 0 }}>{arrival.title}</p>
                <a
                  href="#"
                  className="arrivals_btn"
                  style={{
                    padding: '8px 40px',
                    margin: "20px 0",
                    border: '2px solid #089da1',
                    textDecoration: 'none',
                    color: '#000',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(arrival);
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
      </div>

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '400px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <h2>{selectedBook?.title}</h2>
            <p>{selectedBook?.description}</p>
            <button
              onClick={closeModal}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                border: 'none',
                backgroundColor: '#089da1',
                color: '#fff',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Arrivals;