import "./portfolio.css";

export default function PortfolioItem({ title, image, url, onClick }) {
  return (
    <div className="portfolio-item" onClick={() => onClick(url)}>
      <img src={image} alt={title} />
      <div className="portfolio-item-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
