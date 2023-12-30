import React, { useEffect } from 'react';
import './style.css'; // Import your CSS file here

const MyReactComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      {/* <section className="hidden">
        <h1>Hi Devs</h1>
        <p>This is my website</p>
      </section>

      <section className="hidden">
        <h2>Buy My Product</h2>
      </section>

      <section className="hidden">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem commodi consectetur, eaque a suscipit
          expedita eum quas laboriosam deleniti eos quam architecto, saepe molestias soluta cum voluptas optio dolore amet!
        </p>
      </section> */}

      <section className="hidden">
        <h2>It is really Good</h2>
        <div className="logos">
          <div className="logo hidden">
            <img
              src="https://img.freepik.com/free-vector/students-waiting-school-bus_1308-132700.jpg?w=1480&t=st=1694263401~exp=1694264001~hmac=7f42c980e78dc1e8da2c7d2eed73adfa6c34af05ac5502e6ff86e2538e466688"
              alt=""
            />
          </div>
          <div className="logo hidden">
            <img
              src="https://img.freepik.com/free-vector/students-waiting-school-bus_1308-132700.jpg?w=1480&t=st=1694263401~exp=1694264001~hmac=7f42c980e78dc1e8da2c7d2eed73adfa6c34af05ac5502e6ff86e2538e466688"
              alt=""
            />
          </div>
          <div className="logo hidden">
            <img
              src="https://img.freepik.com/free-vector/students-waiting-school-bus_1308-132700.jpg?w=1480&t=st=1694263401~exp=1694264001~hmac=7f42c980e78dc1e8da2c7d2eed73adfa6c34af05ac5502e6ff86e2538e466688"
              alt=""
            />
          </div>
          <div className="logo hidden">
            <img
              src="https://img.freepik.com/free-vector/students-waiting-school-bus_1308-132700.jpg?w=1480&t=st=1694263401~exp=1694264001~hmac=7f42c980e78dc1e8da2c7d2eed73adfa6c34af05ac5502e6ff86e2538e466688"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReactComponent;
