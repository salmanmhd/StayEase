import React from "react";

function GuestDashboard() {
  return (
    <div className="guest-dashboard">
      <header className="dashboard-header">
        <h1>Welcome to [PG Company Name]</h1>
        <p>Your comfort is our priority</p>
      </header>

      <section className="room-availability">
        <h2>Room Availability</h2>
        <p>Check the availability of rooms and book your stay.</p>
        {/* Add functionality to check and display room availability */}
      </section>

      <section className="guest-services">
        <h2>Guest Services</h2>
        <ul>
          <li>24/7 Security</li>
          <li>Wi-Fi</li>
          <li>Housekeeping</li>
          <li>Laundry Services</li>
          {/* List other services offered */}
        </ul>
      </section>

      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>Stay updated with our latest events and activities.</p>
        {/* Add a list or calendar of events */}
      </section>

      <section className="contact-information">
        <h2>Contact Information</h2>
        <p>If you have any questions, feel free to contact us:</p>
        <p>Email: contact@pgcompany.com</p>
        <p>Phone: +123 456 7890</p>
        {/* Add more contact details if necessary */}
      </section>

      <footer className="dashboard-footer">
        <p>&copy; 2025 [PG Company Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default GuestDashboard;
