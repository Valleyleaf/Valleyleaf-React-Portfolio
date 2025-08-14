import pngimage from '../../assets/img/pdf-document-svgrepo-com.svg';

export default function Resume(){
    return (
      <>
        <div className='flex-container-columns center-content fade-in'>
          <h2 className='typewriterClassResume'>Resume</h2>
          <div>
          <p>Interested in hiring me? Find my full resume for download below</p>
          </div>
          <img className='mini-img' src={pngimage} alt="Download Resume" />
          <a className='flex-container center-content downloadButton' href="https://drive.google.com/file/d/1_aUBoJIAii3fql7Fq8tXlXF49ZRR4hTJ/view?usp=sharing">Download</a>
        </div>
      </>
    );
  }