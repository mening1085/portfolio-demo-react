import "./portfolio.css";

export default function PortfolioItem({ title, image }) {
  return (
    <div className="portfolio-item">
      <img
        src={image}
        alt={title}
      />
      <div className="portfolio-item-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
