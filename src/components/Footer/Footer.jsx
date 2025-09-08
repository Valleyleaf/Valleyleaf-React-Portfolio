import './footer.css';

  export default function Footer(){
    const currentYear = new Date().getFullYear();
    return (
      <>
        <div className="Footer">
          <p>© {currentYear} Aston Andersson Dahllof. All rights reserved.</p>
        </div>
      </>
    );
};
