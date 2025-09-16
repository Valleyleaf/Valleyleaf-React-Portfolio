import './tvLoader.css';

function TVLoader() {
  return (
    <section>
        <div class="intro-wrap">
            <div class="noise"></div>
            <div class="noise noise-moving"></div>
            <div class="play" data-splitting>PLAY</div>
            <div class="time">--:--</div>
            <div class="recordSpeed">SLP 0:00:00</div>
        </div>
    </section>
  );
}

export default TVLoader;

// Note: This along with tvLoader.css is from https://codepen.io/creme/pen/aPJwEz and belongs to creme.