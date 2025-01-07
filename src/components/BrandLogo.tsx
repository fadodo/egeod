import { Link } from "react-router-dom";

export const BrandLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img 
        src="/logoEGEOD1.png" 
        alt="EGEOD Logo" 
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">EGEOD</span>
          <span className="text-sm text-muted-foreground">Expert of Geospatial Data</span>
        </div>
      )}
    </Link>
  );
};