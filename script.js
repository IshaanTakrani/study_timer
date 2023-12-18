class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer-min"),
      seconds: root.querySelector(".timer-sec"),
      startbtn: root.querySelector(".btn-s"),
      resetbtn: root.querySelector(".btn-r"),

      pre1: root.querySelector("#btn1"),
      pre2: root.querySelector("#btn2"),
      pre3: root.querySelector("#btn3"),
      pre4: root.querySelector("#btn4"),
      pre5: root.querySelector("#btn5"),
      pre6: root.querySelector("#btn6"),
      pre7: root.querySelector("#btn-other"),
      // input: root.querySelector(".input"),
      // pre_1: root.querySelector(".pre-but-1"),
      //   pre_2: root.querySelector(".pre-but-2"),
    };

    this.interval = null;
    this.remaining = 90;
    this.timeval = 0;
    this.song = null;
    // this.el.input.value = 90;

    // this.el.input.addEventListener("keypress", function (event) {
    //   if (event.key === "Enter") {
    //     event.preventDefault();
    //     // this.el.resetbtn.click();
    //     root.querySelector(".btn-r").click();
    //     root.querySelector(".btn-s").click();
    //   }
    // });

    this.el.startbtn.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
      if (this.song != null) {
        this.stop_song();
      }
    });

    this.el.resetbtn.addEventListener("click", () => {
      this.stop();
      this.remaining = this.timeval * 60;
      this.updateTime();
      if (this.song != null) {
        this.stop_song();
      }
    });

    this.el.pre1.addEventListener("click", () => {
      this.remaining = 5 * 60;
      this.el.minutes.innerHTML = "5".padStart(2, "0");
      this.el.seconds.innerHTML = "0".padStart(2, "0");
      this.timeval = 5;
    });

    this.el.pre2.addEventListener("click", () => {
      this.remaining = 10 * 60;
      this.el.minutes.innerHTML = "10".padStart(2, "0");
      this.el.seconds.innerHTML = "0".padStart(2, "0");
      this.timeval = 10;
    });

    this.el.pre3.addEventListener("click", () => {
      this.remaining = 15 * 60;
      this.el.minutes.innerHTML = "15".padStart(2, "0");
      this.el.seconds.innerHTML = "0".padStart(2, "0");
      this.timeval = 15;
    });

    this.el.pre4.addEventListener("click", () => {
      this.remaining = 20 * 60;
      this.el.minutes.innerHTML = "20".padStart(2, "0");
      this.el.seconds.innerHTML = "0".padStart(2, "0");
      this.timeval = 20;
    });

    this.el.pre5.addEventListener("click", () => {
      this.remaining = 25 * 60;
      this.el.minutes.innerHTML = "25".padStart(2, "0");
      this.el.seconds.innerHTML = "0".padStart(2, "0");
      this.timeval = 25;
    });

    this.el.pre6.addEventListener("click", () => {
      this.remaining = 30 * 60;
      this.el.minutes.innerHTML = "30".padStart(2, "0");
      this.el.seconds.innerHTML = "0".padStart(2, "0");
      this.timeval = 30;
    });

    this.el.pre7.addEventListener("click", () => {
      const input = prompt("Enter time (in minutes): ");
      this.remaining = input * 60;
      this.timeval = input;
      this.updateTime();
    });
  }

  // below: preset button eventlisteners:

  updateTime() {
    const min = Math.floor(this.remaining / 60);
    const sec = this.remaining % 60;
    this.el.minutes.innerHTML = min.toString().padStart(2, "0");
    this.el.seconds.innerHTML = sec.toString().padStart(2, "0");
  }

  start() {
    if (this.remaining === 0) {
      // this.play_song();
      return;
    }

    this.interval = setInterval(() => {
      this.remaining--;
      this.updateTime();

      if (this.remaining === 0) {
        this.end();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval); // stops interval above
    this.interval = null;
  }

  end() {
    clearInterval(this.interval);
    this.interval = null;
    // this.play_song();
  }

  static getHTML() {
    return `

    <div class="timer">
      <div class="left">
        <h1 class>Ishaan's Timer</h1>
        <div class="clock">
          <span class="timer-min">00</span>
          <span class="timer-part"> : </span>
          <span class="timer-sec">00</span>
        </div>

        <div class="buttons">
          <button type="button" class="btn-s">
            <img
              src="media/play_pause_FILL0_wght400_GRAD0_opsz24.svg"
              alt="play_pause" />
          </button>
          <button type="button" class="btn-r">
            <img src="media/timer_FILL0_wght400_GRAD0_opsz24.svg" alt="timer" />
          </button>
        </div>
      </div>

      <div class="right">
        <div class="preset-buttons">
          <h2>Presets</h1>
          <button class="btn-preset" id="btn1">5:00</button>
          <button class="btn-preset" id="btn2">10:00</button>
          <button class="btn-preset" id="btn3">15:00</button>
          <button class="btn-preset" id="btn4">20:00</button>
          <button class="btn-preset" id="btn5">25:00</button>
          <button class="btn-preset" id="btn6">30:00</button>
          <button class="btn-preset" id="btn-other">other (click me)</button>
        </div>
      </div>
    </div>

        `;
  }
}

new Timer(document.querySelector(".timer"));
