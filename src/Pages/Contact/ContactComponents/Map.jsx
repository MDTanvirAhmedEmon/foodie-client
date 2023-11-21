/* eslint-disable react/no-unknown-property */
const Map = () => {
  return (
    <div className="w-full">
      <iframe 
      className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.443693318012!2d90.27069477592714!3d23.731552289498556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37559510e84bd357%3A0xa434d44d62e70ea!2sKalatia%20Bazar!5e0!3m2!1sen!2sbd!4v1700588367649!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
