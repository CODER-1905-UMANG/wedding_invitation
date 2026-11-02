import React, { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  MapPin,
  Heart,
  Clock3,
  ChevronDown,
  ExternalLink,
  Flower2,
  PartyPopper,
  Music2,
  VolumeX,
  Languages,
  Download,
} from "lucide-react";


const weddingDate = new Date("2026-12-02T00:00:00+05:30");
const venueName = "Vrindavan Greens";
const venueAddress = "Opposite Mohan Nagar Metro Station, Ghaziabad";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`${venueName}, ${venueAddress}`);

function getCountdown() {
  const remaining = Math.max(0, weddingDate.getTime() - Date.now());

  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

const copy = {
  en: {
    ribbon: "THE WEDDING CELEBRATION OF MANSI & ISKAND",
    together: "TOGETHER WITH THEIR FAMILIES",
    intro: "Request the pleasure of your company at the wedding celebration of",
    save: "SAVE THE DATE",
    scroll: "SCROLL TO EXPLORE",
    mark: "MARK YOUR CALENDAR",
    saveTitle: "Save the date",
    countdown: "The countdown to our happily ever after",
    calendarSub: "One beautiful day. A lifetime of memories.",
    addGoogle: "ADD TO GOOGLE CALENDAR",
    downloadCalendar: "DOWNLOAD CALENDAR INVITE",
    featureTop: "THE PLACE WHERE OUR STORIES MEET",
    featureTitle: "A day filled with love & celebration",
    featureText: "We would be delighted to celebrate this special day with you.",
    discover: "DISCOVER THE VENUE",
    celebration: "THE CELEBRATION",
    eventsTitle: "Join us for the festivities",
    weddingDay: "Wednesday · 2 December 2026",
    procession: "THE WEDDING PROCESSION",
    baraat: "Baraat",
    baraatText: "Let the music, joy and celebrations begin.",
    dining: "DINING & TOGETHERNESS",
    dinner: "Dinner",
    dinnerText: "An evening of delicious food and happy memories.",
    welcome: "WE CAN'T WAIT TO WELCOME YOU",
    find: "Find your way to us",
    venueLabel: "OUR WEDDING VENUE",
    maps: "OPEN GOOGLE MAPS",
    presence: "YOUR PRESENCE IS OUR PRESENT",
    join: "Will you join us?",
    rsvpIntro: "Kindly let us know if you'll be celebrating with us.",
    yourName: "Your name",
    namePlaceholder: "Enter your name",
    guests: "Number of guests",
    response: "Your response",
    accept: "Joyfully accepts",
    decline: "Regretfully declines",
    send: "SEND RSVP",
    rsvpNote: "Your response will open in WhatsApp, ready to send to the family.",
    withLove: "WITH LOVE & BLESSINGS",
    closing: "We saved you a place in our story.",
    thanks: "Thank you for being a part of our happiness.",
    play: "PLAY WEDDING MUSIC",
    pause: "PAUSE MUSIC",
    language: "हिन्दी",
    dateLabel: "Wednesday, 2 December 2026",
  },

  hi: {
    ribbon: "मानसी और इस्कंद के विवाह का शुभ अवसर",
    together: "अपने परिवारों के साथ",
    intro: "आपको सादर आमंत्रित करते हैं, हमारे विवाह समारोह में पधारकर हमें अनुग्रहित करें",
    save: "शुभ दिनांक",
    scroll: "आगे देखने के लिए नीचे जाएँ",
    mark: "इस दिन को याद रखें",
    saveTitle: "शुभ विवाह",
    countdown: "हमारे नए सफ़र की उलटी गिनती",
    calendarSub: "एक खूबसूरत दिन, जीवन भर की यादें।",
    addGoogle: "गूगल कैलेंडर में जोड़ें",
    downloadCalendar: "कैलेंडर निमंत्रण डाउनलोड करें",
    featureTop: "जहाँ हमारी कहानियाँ एक होंगी",
    featureTitle: "प्रेम और उत्सव से भरा दिन",
    featureText: "इस खास दिन को आपके साथ मनाकर हमें बेहद खुशी होगी।",
    discover: "विवाह स्थल देखें",
    celebration: "शुभ उत्सव",
    eventsTitle: "समारोह में हमारे साथ शामिल हों",
    weddingDay: "बुधवार · 2 दिसंबर 2026",
    procession: "शुभ बारात",
    baraat: "बारात",
    baraatText: "संगीत, खुशियों और उत्सव की शुरुआत।",
    dining: "भोज एवं आत्मीय मिलन",
    dinner: "रात्रिभोज",
    dinnerText: "स्वादिष्ट भोजन और खूबसूरत यादों से भरी शाम।",
    welcome: "आपका स्वागत करने की प्रतीक्षा है",
    find: "हमारे विवाह स्थल तक पहुँचें",
    venueLabel: "हमारा विवाह स्थल",
    maps: "गूगल मैप्स खोलें",
    presence: "आपकी उपस्थिति ही हमारा उपहार है",
    join: "क्या आप हमारे साथ होंगे?",
    rsvpIntro: "कृपया बताएं कि आप समारोह में शामिल होंगे या नहीं।",
    yourName: "आपका नाम",
    namePlaceholder: "अपना नाम लिखें",
    guests: "मेहमानों की संख्या",
    response: "आपका उत्तर",
    accept: "सहर्ष शामिल होंगे",
    decline: "क्षमा सहित शामिल नहीं हो पाएँगे",
    send: "जवाब भेजें",
    rsvpNote: "आपका जवाब WhatsApp में खुलेगा, जिसे आप परिवार को भेज सकते हैं।",
    withLove: "स्नेह एवं आशीर्वाद सहित",
    closing: "हमारी खुशियों में आपका स्थान है।",
    thanks: "हमारी खुशियों का हिस्सा बनने के लिए धन्यवाद।",
    play: "शादी का संगीत चलाएँ",
    pause: "संगीत रोकें",
    language: "English",
    dateLabel: "बुधवार, 2 दिसंबर 2026",
  },
};

const calendarDetails = {
  title: "Wedding Celebration — Mansi & Iskand",
  description:
    "Mansi & Iskand's wedding celebration at Vrindavan Greens. Baraat: 8:00 PM. Dinner: 8:30 PM.",
};

function getGoogleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: calendarDetails.title,
    dates: "20261202/20261203",
    ctz: "Asia/Kolkata",
    details: calendarDetails.description,
    location: `${venueName}, ${venueAddress}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function downloadCalendarInvite() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mansi and Iskand//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:mansi-iskand-wedding-20261202@invitation.local",
    "DTSTAMP:20261102T000000Z",
    "DTSTART;VALUE=DATE:20261202",
    "DTEND;VALUE=DATE:20261203",
    "SUMMARY:Wedding Celebration — Mansi & Iskand",
    "DESCRIPTION:Baraat at 8:00 PM\\nDinner at 8:30 PM",
    `LOCATION:${venueName}, ${venueAddress}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "Mansi-and-Iskand-Wedding.ics";

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

function FloralSprig({ className = "" }) {
  return (
    <svg
      className={`floral-sprig ${className}`}
      viewBox="0 0 220 300"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M108 286C110 222 103 159 117 89C122 63 133 37 151 15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M111 230C72 218 47 190 38 160C72 163 99 184 111 230Z"
        fill="#a8b39a"
      />
      <path
        d="M112 194C147 181 170 155 180 124C148 129 123 151 112 194Z"
        fill="#bdc6ad"
      />
      <path
        d="M115 142C83 126 68 99 68 72C94 83 111 107 115 142Z"
        fill="#a8b39a"
      />
      <path
        d="M127 91C153 77 166 54 166 30C144 40 130 61 127 91Z"
        fill="#bdc6ad"
      />
      <g fill="#d9a6a0">
        <ellipse cx="37" cy="151" rx="9" ry="20" transform="rotate(-48 37 151)" />
        <ellipse cx="25" cy="163" rx="8" ry="17" transform="rotate(-82 25 163)" />
        <ellipse cx="47" cy="171" rx="8" ry="17" transform="rotate(-20 47 171)" />
        <circle cx="38" cy="162" r="6" fill="#c38c62" />
        <ellipse cx="181" cy="115" rx="9" ry="20" transform="rotate(42 181 115)" />
        <ellipse cx="194" cy="127" rx="8" ry="17" transform="rotate(80 194 127)" />
        <ellipse cx="171" cy="135" rx="8" ry="17" transform="rotate(20 171 135)" />
        <circle cx="182" cy="126" r="6" fill="#c38c62" />
      </g>
    </svg>
  );
}

/* ORIGINAL GANESHA IMAGE RESTORED */
function GaneshMark() {
  return (
    <div className="ganesh-mark" aria-label="Lord Ganesha blessing">
      <img
        src="/ganesha-emblem.png"
        alt="Lord Ganesha"
        className="ganesh-image"
      />
    </div>
  );
}

function ScratchDate() {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const isDrawing = useRef(false);
  const clearedPoints = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(
      0,
      0,
      rect.width,
      rect.height
    );

    gradient.addColorStop(0, "#b87977");
    gradient.addColorStop(0.5, "#d99f98");
    gradient.addColorStop(1, "#b87977");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(255,245,226,.55)";
    ctx.font = "15px Georgia";

    for (let x = 12; x < rect.width; x += 26) {
      for (let y = 18; y < rect.height; y += 25) {
        ctx.fillText("✦", x, y);
      }
    }

    ctx.strokeStyle = "rgba(255,244,223,.8)";
    ctx.lineWidth = 1;
    ctx.strokeRect(5, 5, rect.width - 10, rect.height - 10);
  }, []);

  const erase = (event) => {
    if (!isDrawing.current || revealed) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    clearedPoints.current += 1;

    if (clearedPoints.current > 28) {
      setRevealed(true);

      canvas.style.transition = "opacity .8s ease";
      canvas.style.opacity = "0";

      window.setTimeout(() => {
        if (canvas) canvas.style.display = "none";
      }, 850);
    }
  };

  return (
    <div className={`scratch-wrap ${revealed ? "revealed" : ""}`}>
      <div className="scratch-under">
        <span>THE DAY WE SAY I DO</span>
        <strong>02 · 12 · 2026</strong>
        <small>WEDNESDAY · DECEMBER</small>
      </div>

      {!revealed && (
        <div className="scratch-prompt">
          Gently scratch to reveal the date
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="scratch-canvas"
        aria-label="Scratch to reveal the wedding date"
        onPointerDown={(event) => {
          isDrawing.current = true;
          event.currentTarget.setPointerCapture(event.pointerId);
          erase(event);
        }}
        onPointerMove={erase}
        onPointerUp={() => {
          isDrawing.current = false;
        }}
        onPointerCancel={() => {
          isDrawing.current = false;
        }}
      />
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [countdown, setCountdown] = useState(getCountdown());
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [response, setResponse] = useState("Joyfully accepts");
  const [language, setLanguage] = useState("en");
  const [musicOn, setMusicOn] = useState(false);

  const audioRef = useRef(null);
  const t = copy[language];

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      return;
    }

    try {
      await audio.play();
      setMusicOn(true);
    } catch (error) {
      console.error("Unable to play wedding music:", error);
      setMusicOn(false);
    }
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const submitRsvp = (event) => {
    event.preventDefault();

    const message = [
      "Wedding RSVP — Mansi & Iskand",
      `Name: ${guestName}`,
      `Guests: ${guestCount}`,
      `Response: ${response}`,
    ].join("\n");

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="wedding-site">
      {!opened && (
        <div className="opening-screen">
          <div className="opening-frame" />

          <div className="opening-topline">
            A LITTLE INVITATION · A LOT OF LOVE
          </div>

          <div className="opening-envelope">
            <div className="envelope-flower">❀</div>
            <div className="opening-monogram">
              M <span>&</span> I
            </div>
            <div className="opening-names">Mansi & Iskand</div>
            <div className="opening-date">02 · 12 · 2026</div>
            <div className="wax-seal">ॐ</div>
          </div>

          <button
            className="open-button"
            onClick={() => setOpened(true)}
          >
            OPEN YOUR INVITATION <span>✧</span>
          </button>

          <p className="opening-note">
            With the blessings of our families
          </p>
        </div>
      )}

      <div className="ambient-petals" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i} style={{ "--i": i }}>
            ✿
          </span>
        ))}
      </div>

      <audio
        ref={audioRef}
        src="/wedding-song.mp3"
        loop
        preload="none"
      />

      <div className="invitation-tools" aria-label="Invitation settings">
        <button
          className="tool-button"
          type="button"
          onClick={() =>
            setLanguage((current) =>
              current === "en" ? "hi" : "en"
            )
          }
        >
          <Languages size={15} />
          {t.language}
        </button>

        <button
          className="tool-button"
          type="button"
          onClick={toggleMusic}
        >
          {musicOn ? <VolumeX size={15} /> : <Music2 size={15} />}
          {musicOn ? t.pause : t.play}
        </button>
      </div>

      <header className="site-ribbon">
        <span>✦</span> {t.ribbon} <span>✦</span>
      </header>

      <section className="cover-section" id="home">
        <FloralSprig className="sprig sprig-left" />
        <FloralSprig className="sprig sprig-right" />

        <div className="cover-content">
          <GaneshMark />

          <p className="sanskrit">॥ श्री गणेशाय नमः ॥</p>
          <p className="eyebrow">{t.together}</p>
          <p className="cover-intro">{t.intro}</p>

          <h1>
            <span>Mansi</span>
            <i>&</i>
            <span>Iskand</span>
          </h1>

          <p className="cover-family">
            Mansi Gupta <span>✧</span> Iskand Gupta
          </p>

          <div className="ornament-divider">
            <i />
            <Heart size={17} fill="currentColor" />
            <i />
          </div>

          <p className="cover-date-label">{t.save}</p>

          <ScratchDate />

          <a className="scroll-link" href="#welcome">
            {t.scroll} <ChevronDown size={15} />
          </a>
        </div>

        <div className="cover-bottom-flourish">❧ ❧ ❧</div>
      </section>

      <section className="traditional-section section-pad" id="welcome">
        <div className="traditional-card">
          <div className="traditional-inner">
            <div className="traditional-top-ornament">
              ❧ ❀ ❧ ❀ ❧
            </div>

            <div className="traditional-kalash" aria-hidden="true">
              ॐ
            </div>

            <p className="traditional-mantra-title">
              ॥ श्री गणेशाय नमः ॥
            </p>

            <p className="traditional-mantra">
              मंगलम् भगवान विष्णुः, मंगलम् गरुणध्वजः।
              <br />
              मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरिः॥
            </p>

            <p className="traditional-blessing">
              With the blessing hands of Lord Ganesha
            </p>

            <p className="traditional-parents">
              Mrs. Renu Gupta &amp; Mr. Pradeep Gupta
            </p>

            <p className="traditional-copy">
              request the pleasure of your gracious presence to shower your
              blessings on the auspicious occasion of the marriage of their
              loving daughter
            </p>

            <div className="traditional-bride">Mansi</div>

            <p className="traditional-relation">
              (Grand D/o Late Smt. Sudha Gupta
              <br />
              &amp; Sh. Radhe Shyam Gupta)
            </p>

            <div className="traditional-with">With</div>

            <div className="traditional-groom">Iskand</div>

            <p className="traditional-relation">
              (S/o Mrs. Bhawna Gupta &amp; Mr. Mukesh Gupta)
              <br />
              R/o Ghaziabad (U.P.)
            </p>

            <p className="traditional-programme">as per programme</p>

            <div className="traditional-family-grid">
              <div>
                <strong>W.B.C.F.:</strong>
                <span>Tushar Gupta</span>
                <span>Dhruv Gupta</span>
                <span>Yug Gupta, Raj Gupta</span>
                <span>Milan Gupta, Tanishka, Yashi</span>
              </div>

              <div>
                <strong>Special Invitation From:</strong>
                <span>Pratibha Gupta - C.B. Gupta</span>
                <span>Neetu Gupta - Lalit Gupta</span>
                <span>Nidhi Gupta</span>
              </div>

              <div>
                <strong>R.S.V.P.:</strong>
                <span>Mahesh Gupta</span>
                <span>Rajesh Gupta, Ajay Gupta</span>
                <span>Vijay Gupta, Lalit Gupta</span>
                <span>Sudhir Gupta</span>
              </div>
            </div>

            <div className="traditional-bottom-ornament">
              ❧ ❀ ❧ ❀ ❧
            </div>
          </div>
        </div>
      </section>

      <section className="date-section section-pad">
        <div className="section-kicker">{t.mark}</div>
        <h2>{t.saveTitle}</h2>
        <p className="date-subtitle">{t.countdown}</p>

        <div className="countdown-grid">
          {Object.entries(countdown).map(([unit, value]) => (
            <div className="countdown-tile" key={unit}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{unit.toUpperCase()}</span>
            </div>
          ))}
        </div>

        <div className="calendar-card">
          <CalendarDays size={22} />
          <div>
            <strong>{t.dateLabel}</strong>
            <span>{t.calendarSub}</span>
          </div>
        </div>

        <div className="calendar-actions">
          <a
            className="calendar-action"
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarDays size={15} />
            {t.addGoogle}
          </a>

          <button
            className="calendar-action"
            type="button"
            onClick={downloadCalendarInvite}
          >
            <Download size={15} />
            {t.downloadCalendar}
          </button>
        </div>
      </section>

      <section className="venue-feature">
        <img
          src="https://media.weddingz.in/photologue/images/vrindavan-greens-garden-vrindavan-greens-garden-2.jpg"
          alt="Wedding venue inspiration"
          loading="lazy"
        />

        <div className="venue-feature-shade" />

        <div className="venue-feature-copy">
          <span>{t.featureTop}</span>
          <h2>{t.featureTitle}</h2>
          <p>{t.featureText}</p>

          <a href="#venue" className="light-link">
            {t.discover} <ChevronDown size={14} />
          </a>
        </div>
      </section>

      <section className="events-section section-pad">
        <div className="section-kicker">{t.celebration}</div>
        <h2>{t.eventsTitle}</h2>
        <p className="events-date">{t.weddingDay}</p>

        <div className="event-list">
          <article className="event-card">
            <div className="event-icon">
              <PartyPopper size={22} />
            </div>

            <div className="event-copy">
              <span>{t.procession}</span>
              <h3>{t.baraat}</h3>
              <p>{t.baraatText}</p>
            </div>

            <div className="event-time">
              <Clock3 size={15} />
              <strong>8:00 PM</strong>
            </div>
          </article>

          <div className="event-connector">
            <span>✦</span>
          </div>

          <article className="event-card">
            <div className="event-icon">
              <Flower2 size={22} />
            </div>

            <div className="event-copy">
              <span>{t.dining}</span>
              <h3>{t.dinner}</h3>
              <p>{t.dinnerText}</p>
            </div>

            <div className="event-time">
              <Clock3 size={15} />
              <strong>8:30 PM</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="venue-section section-pad" id="venue">
        <div className="section-kicker">{t.welcome}</div>
        <h2>{t.find}</h2>

        <div className="venue-card">
          <img
            src="https://image.wedmegood.com/resized/1000X/uploads/member/671290/1566192335_Screenshot_3.jpg"
            alt="Vrindavan Greens venue"
            loading="lazy"
          />

          <div className="venue-details">
            <span>{t.venueLabel}</span>
            <h3>{venueName}</h3>
            <p>
              <MapPin size={17} />
              {venueAddress}
            </p>

            <a
              className="map-button"
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.maps} <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="rsvp-section section-pad">
        <div className="section-kicker">{t.presence}</div>
        <h2>{t.join}</h2>
        <p className="rsvp-intro">{t.rsvpIntro}</p>

        <form className="rsvp-form" onSubmit={submitRsvp}>
          <label>
            {t.yourName}
            <input
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder={t.namePlaceholder}
              required
            />
          </label>

          <label>
            {t.guests}
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6+</option>
            </select>
          </label>

          <label>
            {t.response}
            <select
              value={response}
              onChange={(e) => setResponse(e.target.value)}
            >
              <option value="Joyfully accepts">{t.accept}</option>
              <option value="Regretfully declines">{t.decline}</option>
            </select>
          </label>

          <button className="rsvp-button" type="submit">
            {t.send} <Heart size={15} />
          </button>
        </form>

        <p className="rsvp-footnote">{t.rsvpNote}</p>
      </section>

      <footer className="closing-section">
        <FloralSprig className="closing-sprig closing-left" />
        <FloralSprig className="closing-sprig closing-right" />

        <div className="closing-stars">✦　✧　✦</div>
        <p>{t.withLove}</p>
        <h2>{t.closing}</h2>

        <div className="closing-names">
          Mansi <i>&</i> Iskand
        </div>

        <div className="closing-date">02 · 12 · 2026</div>
        <div className="closing-rule" />

        <span className="closing-thanks">{t.thanks}</span>

        <span className="made-with-love">
          MADE WITH <Heart size={11} fill="currentColor" /> LOVE
        </span>
      </footer>
    </main>
  );
}

export default App;