//aboutus.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About Us</title>
<style>
*{box-sizing:border-box;}

body{
    margin:0;
    font-family:Georgia,serif;
    background:#f4f6f4;
}

.nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:rgba(1,39,1,0.9);
    color:white;
    position:sticky;
    top:0;
    z-index:10;
    width:100%;
    height:10vh;
    box-shadow:0 8px 12px rgba(0,0,0,0.4);
}
.nav img{
    width:56px;
    height:56px;
    object-fit:contain;
}
nav a{
    margin-left:1.5rem;
    color:#fff;
    text-decoration:none;
    transition:.5s;
}
nav a:hover{
    text-decoration:underline;
}

.hero{
    display:flex;
    justify-content:center;
    padding:40px 20px;
    background:#eef3ee;
    min-height:50vh;
}

.slider-wrapper{
    display:flex;
    justify-content:space-between;
    width:80%;
    height:260px;
    background:white;
    border-radius:10px;
    padding:20px;
    position:relative;
}

.text-side{
    flex:1;
    max-width:45%;
    padding-right:20px;
}

.text-side h2{
    margin:0;
    color:#064c24;
}

.about-link{
    padding:6px 12px;
    background:#064c24;
    color:white;
    font-size:13px;
    border-radius:5px;
    text-decoration:none;
}

.image-side{
    flex:1;
    max-width:55%;
    height:100%;
    overflow:hidden;
    border-radius:10px;
    position:relative;
}

input[type="radio"]{display:none;}

.slides img{
    position:absolute;
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0;
    transition:.6s;
}

#as1:checked ~ .image-side .a1{opacity:1;}
#as2:checked ~ .image-side .a2{opacity:1;}
#as3:checked ~ .image-side .a3{opacity:1;}

.nav-buttons{
    display:flex;
    gap:10px;
    margin-top:10px;
}

.nav-buttons label{
    font-size:24px;
    cursor:pointer;
    background:#064c24;
    color:white;
    padding:5px 10px;
    border-radius:5px;
}

.about-content{
    max-width:900px;
    margin:40px auto;
    padding:20px;
    background:white;
    border-radius:10px;
    line-height:1.7;
    color:#222;
}
.about-content h2{
    margin-top:0;
    color:#064c24;
}

.contact-card{
    max-width:400px;
    margin:40px auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 4px 10px rgba(0,0,0,0.2);
}
.contact-card h3{
    margin:0;
    color:#064c24;
    margin-bottom:10px;
}

.footer{
    background:rgba(1,39,1,0.9);
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:20px 0;
    gap:10px;
}
.footer-top{
    display:flex;
    align-items:center;
    gap:10px;
}
.footer-top img{
    width:50px;
    height:50px;
}
.footer-icons{
    display:flex;
    gap:15px;
}
.footer-icons img{
    width:18px;
    height:18px;
    cursor:pointer;
    transition:.3s;
}
.footer-icons img:hover{
    transform:scale(1.1);
}
.footer-bottom{
    text-align:center;
    font-size:12px;
}
</style>
</head>

<body>

<div class="nav">
<a href="index.html">
<img src="logo.png">
</a>
<nav>
<a href="2.html">Home</a>
<a href="#aboutus">About Us</a>
<a href="#culture">Cultural Events</a>
</nav>
</div>

<section class="hero">

<div class="slider-wrapper">

<div class="text-side">
<h2>About Us</h2>
<p>
The Department of Applied Community Development Studies empowers students through innovation, outreach, and cultural engagement. We aim to nurture individuals who can create impact within their communities while embracing diverse cultural identities represented at Egerton University.
</p>

<div class="nav-buttons">
<label for="as1">&#10094;</label>
<label for="as2">&#10095;</label>
</div>
</div>

<input type="radio" name="aboutslider" id="as1" checked>
<input type="radio" name="aboutslider" id="as2">
<input type="radio" name="aboutslider" id="as3">

<div class="image-side">
<div class="slides">
<img src="about4.jpeg" class="a1">
<img src="about5.jpeg" class="a2">
<img src="about1.jpeg" class="a3">
</div>
</div>

</div>

</section>

<div class="about-content">
<h2>Who We Are</h2>
<p>
Welcome to the Department of Applied Community Development Studies. Our mission is to create a space where students grow academically while also engaging deeply with culture, identity, and community expression.
</p>

<p>
Through participation in cultural events, festivals, creative showcases, and traditional exhibitions, we encourage students to connect with their roots while learning from the diverse cultures represented within Egerton University.
</p>

<p>
We believe cultural involvement strengthens unity, inspires creativity, and builds confident leaders who understand the power of diversity in shaping society.
</p>

<h2>What Students Gain</h2>
<p>• Opportunities to participate in cultural week, art displays, music, and dance activities.</p>
<p>• Platforms to express creativity, talent, and personal heritage.</p>
<p>• Exposure to traditions from across the country and beyond.</p>
<p>• A sense of belonging, identity, and community connection.</p>
</div>

<div class="contact-card">
<h3>Contact Information</h3>
<p>Email:jeffersonchirp@gmail.com</p>
<p>Phone:+254 797794518</p>

</div>

<footer class="footer">
<div class="footer-top">
<img src="logo.png">
<span>Egerton University</span>
</div>
<div class="footer-icons">
<img src="https://cdn.simpleicons.org/instagram">
<img src="https://cdn.simpleicons.org/whatsapp">
<img src="https://cdn.simpleicons.org/telegram">
</div>
<div class="footer-bottom">
<p>© 2025 Egerton University. All Rights Reserved.</p>
</div>
</footer>

</body>
</html>  
......  


// art.html
<!DOCTYPE html>

<html lang="en">
<head>
		<meta  charset="UTF-8">
		<meta name="viewport" content="width=device-width , initial-scale=1.0">
		<link rel="stylesheet" href="style.css"/>
		<title>Arts Page</title>

    <style>
      *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #fdfdfd;
  color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  padding: 1.5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #fdfdfd 0%, #f4f4f9 100%);
}

h1, h2, h3 {
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #1a1a1a, #0066ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

p {
  max-width: 66ch;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  opacity: 0.9;
}

a {
  color: #0066ff;
  text-decoration: none;
  position: relative;
  transition: 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: #0066ff;
  transition: 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

a:hover::after {
  width: 100%;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  transition: 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

button, .btn {
  background: #0066ff;
  color: white;
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 102, 255, 0.3);
}

button:hover, .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.4);
}

.float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.cards {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr));
  gap: 2rem;
  padding: 3rem 1rem;
}
    </style>
</head>
<body>

    <iframe id="nav-frame" src="nav.html"></iframe>

    <header>
        <h1> Egerton University Arts Week </h1>
        <p>Organized by the Department of Applied Community Development Studies ,</p>
    </header>
    
    <nav>
        <a href="#introduction">Introduction</a>
        <a href="#activities">Activities</a>
        <a href="#schedule">Schedule</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
    </nav>
    
    <div class="container">
        <section id="introduction">
            <h2>Introduction to Arts Week</h2>
            <p>Arts Week is an annual celebration at Egerton University, hosted in collaboration with the Faculty of Education and Community Development Studies (FEDCOS), particularly the Department of Applied Community Development Studies (ACDS). This event aligns with our vision to be a center of excellence in education and community development by fostering creativity, cultural expression, and community engagement through the arts.</p>
            <p>Inspired by the university's Culture Week, Arts Week focuses on artistic talents, performances, and community-building activities. It brings together students, faculty, and the local community to showcase diverse artistic expressions, promote cultural diversity, and highlight the role of arts in societal development. The event typically features a blend of traditional and contemporary arts, emphasizing co-cultures born from community interactions.</p>
            <p>Arts Week not only celebrates vibrancy in creative expression but also supports the Kenya Universities Performing Arts Association (KUPAA) initiatives, shaping societal development through performance arts.</p>
        </section>
        
        <section id="activities">
            <h2>Activities and Highlights</h2>
            <p>Arts Week offers a rich array of activities designed to engage participants in meaningful ways. Here are some key highlights:</p>
            <ul class="activity-list">
                <li><strong>Performances:</strong> Captivating songs, dances, poetry, and theater performances that highlight cultural diversity and community stories.</li>
                <li><strong>Workshops:</strong> Interactive sessions on community arts, creative writing, visual arts, and cultural heritage preservation, led by faculty from the ACDS department.</li>
                <li><strong>Exhibitions:</strong> Art galleries showcasing student and community artwork, including paintings, sculptures, and digital media.</li>
                <li><strong>Competitions:</strong> Talent shows, including Mr. and Miss Egerton University, focusing on artistic talents and community representation.</li>
                <li><strong>Community Engagement:</strong> Collaborative events with Nakuru County Government and local communities to promote cultural exchange and development strategies.</li>
                <li><strong>Panel Discussions:</strong> Talks on the role of arts in community development, featuring experts from FEDCOS and external stakeholders.</li>
            </ul>
        </section>
        
        <section id="schedule">
            <h2>Event Schedule</h2>
            <p>Arts Week is typically held in the 2nd week of December, but dates vary annually.   Check the university calendar for the latest updates.</p>
            <table class="schedule-table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Activities</th>
                        <th>Time</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tuesday</td>
                        <td>Opening Ceremony & Cultural Performances</td>
                        <td>9:00 AM - 12:00 PM</td>
                        <td>Main Auditorium</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Art Workshops & Exhibitions</td>
                        <td>10:00 AM - 4:00 PM</td>
                        <td>FEDCOS Building</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Poetry and Theater Sessions</td>
                        <td>2:00 PM - 6:00 PM</td>
                        <td>Outdoor Amphitheater</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>Community Engagement Activities & Panel Discussions</td>
                        <td>9:00 AM - 5:00 PM</td>
                        <td>Community Center</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Talent Competitions & Closing Ceremony</td>
                        <td>10:00 AM - 8:00 PM</td>
                        <td>Main Hall</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <section id="gallery">
            <h2>Gallery</h2>
            <p>Explore highlights from past Arts Weeks. </p>
            <div class="gallery">
                <img src="/Happy Holi Festival Images!.jpeg"alt="Cultural Dance" width="300px" height="150px">
                <img src="/about5.jpeg" alt="Art Exhibition" width="300px" height="150px">
                <!-- <img src="/" alt="Talent Show"> -->
            </div>
        </section>
        
        <section id="contact">
            <h2>Contact Us</h2>
            <p>For more information about Arts Week or to get involved, contact the Department of Applied Community Development Studies:</p>
            <p>Email: acds@egerton.ac.ke<br>
            Phone: +254-123-456789<br>
            Website: <a href="https://acds.egerton.ac.ke"/>acds.egerton.ac.ke</a></p>
        </section>
    </div>
    
  <iframe id="footer-frame" src="footer.html" ></iframe>

</body>
</html>

// attire.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cultural Attire Showcase</title>

<style>
body {
    margin: 0;
    font-family: Georgia, serif;
    background: #f7f7f7;
    color: #0a2e0a;
}

.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0b3d0b;
    padding: 60px 40px;
    color: white;
}

.hero-text {
    max-width: 50%;
}

.hero-text h1 {
    font-size: 2.8rem;
    margin: 0;
}

.hero-text p {
    font-size: 1.2rem;
    margin-top: 10px;
}

.hero-img img {
    width: 350px;
    height: 420px;
    object-fit: cover;
    border-radius: 15px;
    border: 4px solid white;
}

.section {
    padding: 40px 30px;
    text-align: center;
}

.section h2 {
    font-size: 2rem;
    margin-bottom: 15px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 25px;
    margin-top: 30px;
}

.card {
    background: white;
    border: 2px solid #0a2e0a;
    border-radius: 12px;
    padding: 20px;
    transition: .4s;
}

.card:hover {
    transform: translateY(-8px);
}

.card h3 {
    margin: 0 0 10px 0;
}

.card p {
    line-height: 1.4;
}

.testimonials {
    background: #0b3d0b;
    padding: 50px 20px;
    color: white;
}

.testimonials h2 {
    text-align: center;
    margin-bottom: 25px;
}

.quote {
    max-width: 700px;
    background: rgba(255,255,255,0.1);
    margin: 15px auto;
    padding: 20px;
    border-radius: 10px;
    font-style: italic;
    line-height: 1.6;
}

.footer {
    background: #0a2e0a;
    color: white;
    text-align: center;
    padding: 18px;
    font-size: 0.9rem;
}
</style>
</head>

<body>

    <iframe id="nav-frame" src="nav.html" ></iframe>


<div class="hero">
    <div class="hero-text">
        <h1>Cultural Attire, Campus Pride</h1>
        <p>Where heritage meets modern expression. Explore the identity, dignity, and vibrance woven into every thread worn across campus.</p>
    </div>
    <div class="hero-img">
        <img src="attire.jpeg" alt="Cultural Attire">
    </div>
</div>

<div class="section">
    <h2>Campus Cultural Attire</h2>
    <p>Every outfit is a story, every print a legacy. Step into styles that honor tradition while embracing creativity.</p>

    <div class="cards">

        <div class="card">
            <h3>Heritage Wear</h3>
            <p>Bold, expressive, and deeply rooted in identity. Perfect for cultural events, celebrations, and campus showcases.</p>
        </div>

        <div class="card">
            <h3>Modern Fusion</h3>
            <p>A blend of modern comfort and traditional inspiration. Designed for students who celebrate culture daily.</p>
        </div>

        <div class="card">
            <h3>Festival Outfits</h3>
            <p>Worn proudly during cultural week, pageants, department events, and heritage exhibitions.</p>
        </div>

        <div class="card">
            <h3>Signature Prints</h3>
            <p>Patterns and colors that symbolize pride, unity, and the heartbeat of diverse backgrounds.</p>
        </div>

    </div>
</div>

<div class="testimonials">
    <h2>Voices of Pride</h2>

    <div class="quote">
        “Wearing my cultural attire on campus makes me feel seen, rooted, and connected.” – Student, 3rd Year
    </div>

    <div class="quote">
        “It’s more than clothes. It’s our identity being celebrated in the open.” – Cultural Week Performer
    </div>

    <div class="quote">
        “Every fabric carries a story… and here, those stories are honored.” – Department Representative
    </div>
</div>

<div class="footer">
    © 2025 Campus Cultural Attire Showcase. All Rights Reserved.
</div>


  <iframe id="footer-frame" src="footer.html" ></iframe>


</body>
</html>



// cultural-day.html

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cultural Week - Page 3</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: linear-gradient(to bottom right, rgba(144, 238, 144, 0.6), rgba(240, 255, 240, 0.6)), url('images/bg.jpg');
      background-size: cover;
      background-position: center;
    }

    .main-container {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 20px;
      padding-bottom: 30px;
    }

    .intro, .gallery, .quotes {
      width: 90%;
      max-width: 800px;
      margin: auto;
      padding: 20px;
      background: white;
      border: 1px solid #cfe8cf;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      text-align: center;
    }

    .quotes {
      position: static;
      width: 90%;
    }

    .gallery .photo-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .box {
      border: 2px dashed #a5cfa5;
      height: 120px;
      width: 100%;
      text-align: center;
      vertical-align: middle;
      color: #5c7d5c;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .quote {
      background: #f2fff2;
      padding: 10px;
      border-left: 4px solid #65db25;
      margin: 10px 0;
      font-style: italic;
      border-radius: 6px;
    }

    header {
      text-align: center;
      padding: 20px;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(6px);
      border-bottom: 1px solid #cceccc;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 20px;
      object-fit: cover;
    }

    footer {
      text-align: center;
      background: rgba(255, 255, 255, 0.7);
      padding: 12px;
      margin-top: 30px;
      border-top: 1px solid #cceccc;
    }
  </style>
</head>
<body>



  <header>
    <h1>Cultural Week</h1>
    <pre>A moment to embrace unity. 
         encourages everyone to participate, observe, and enjoy.
         It reminds us that culture is not just practiced, 
         but lived, shared, and celebrated together.
        </pre>
  </header>

  <div class="main-container">
    <section class="intro">
      <h2>About culture</h2>
      <pre>
        This day focuses on cultural performances, creativity, and unity. You can edit this
        paragraph and add more information about the activities of the day.
      </pre>

      <pre>This day focuses on learning and appreciating the diversity within our community.
          Whether through exhibitions, cultural performances, or interactive sessions, 
          every activity highlights the beauty of different backgrounds.
      </pre>
      
    </section>

    <section class="gallery">
      <h2>Photo Table</h2>
      <div class="photo-grid">
        <div class="box"><img src="/pic1.png" alt="Cultural Photo 1"></div>
        <div class="box"><img src="/pic2.png" alt="Cultural Photo 4"></div>
        <div class="box"><img src="/pic3.png" alt="Cultural Photo 6"></div>
      </div>
    </section>

    <section class="quotes">
      <h2>Quotes Section</h2>
      <p class="quote">"Culture is the art of living together."</p>
      <p class="quote">"Every culture has a story worth celebrating."</p>
      <p class="quote">"Unity in diversity strengthens our bonds."</p>  <!-- Changed to fit the theme -->
    </section>
  </div>

  <footer>
    <p>© 2025 Cultural Week Project</p>
  </footer>

</body>
</html>

// index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Egerton University Portal</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <iframe id="nav-frame" src="nav.html" ></iframe>

  <main>
<section class="hero-split">
  <div class="hero-text">
    <h1>Department of Community Development Studies</h1>
    <h2>Arts and Culture</h2>
    <p>
      Preserving heritage. Inspiring creativity. Empowering identity.<br>
      Discover the beauty of our traditions and the art that defines who we are.
    </p>
  </div>
</section>



<section class="content">
  <h2>What We Do</h2>

  <div class="about-section">

    <ul class="about-list">

      <li class="about-card" href="/cultural-day.html">
        <a href="/cultural-day.html"><img src="Cultural Day At School Ideas _ Twinkl.jpeg" alt="Cultural Day"></a>
        <p>Celebrating the diversity and traditions that shape our identity.</p>
      </li>

      <li class="about-card" >
        <a href="/attire.html"><img src="Happy Holi Festival Images!.jpeg" alt="Cultural Fashion"></a>
        <p>Showcasing traditional attire and modern interpretations.</p>
      </li>

      <li class="about-card">
        <a href="/art.html"><img src="Ndebele Houses Art Project, Worksheets, & Art Sub Plans for Black History Month.jpeg" alt="Cultural Art"></a>
        <p>Exploring artistic expressions rooted in culture.</p>
      </li>

    </ul>

  </div>
</section>

    
  </main>

<section class="one" id="about">
<div class="slider-wrapper">

<div class="text-side">
<h2>About Us:</h2>
<p>
The Department of Applied Community Development Studies at Egerton University empowers communities through research, innovation, and collaboration.
<br><a href="aboutus.html" class="about-link">Learn More</a>
</p>

<div class="nav-buttons">
<label for="as1">&#10094;</label>
<label for="as2">&#10095;</label>
</div>
</div>

<input type="radio" name="aboutslider" id="as1" checked>
<input type="radio" name="aboutslider" id="as2">
<input type="radio" name="aboutslider" id="as3">

<div class="image-side">
<div class="slides">
<img src="about4.jpeg" class="a1">
<img src="about5.jpeg" class="a2">
<img src="about1.jpeg" class="a3">
</div>
</div>

</div>
</section>



<section class="event-calendar">
  <h2>Annual Cultural Events Calendar</h2>

  <table class="calendar-table">
    <tr><th>Month</th><th>Event</th><th>Venue</th></tr>
    <tr><td>February</td><td>Traditional Attire Expo</td><td>New Arts Theatre</td></tr>
    <tr><td>April</td><td>Cultural Food Festival</td><td>Student Centre Grounds</td></tr>
    <tr><td>June</td><td>Cultural Art Exhibition</td><td>TB Block Hall 3</td></tr>
    <tr><td>September</td><td>Inter-Culture Dance Gala</td><td>Main Grounds</td></tr>
    <tr><td>November</td><td>Great Egerton Cultural Day</td><td>Open Arena</td></tr>
  </table>
</section>




<section class="acknowledgements">
  <h2>Special Appreciation</h2>
  <p>We express our deepest gratitude to the Egerton University administration for their unwavering support and commitment to promoting culture, identity, and creativity among our students.</p>

  <div class="leaders">
    <div class="leader-card">
      <h3>Prof. Isaac Kibwage</h3>
      <p>Vice Chancellor — Egerton University</p>
      <blockquote>"Culture is the heartbeat of our shared identity. We remain committed to nurturing it."</blockquote>
    </div>

    <div class="leader-card">
      <h3>Prof. Jane Mwangi</h3>
      <p>Director, Community Development Studies</p>
      <blockquote>"Arts and heritage connect generations. Our mission is to keep them alive."</blockquote>
    </div>
  </div>
</section>





<section class="testimonials">
  <h2>What Students Say</h2>

  <div class="testimonial-list">
    <div class="testimonial">
      <p>"The cultural day changed my perspective on identity. I felt truly seen."</p>
      <h4>— Miriam, 3rd Year</h4>
    </div>

    <div class="testimonial">
      <p>"Studying artistic expression helped me discover my creative purpose."</p>
      <h4>— Daniel, 2nd Year</h4>
    </div>

    <div class="testimonial">
      <p>"Egerton celebrates all cultures equally. That’s powerful."</p>
      <h4>— Amina, 4th Year</h4>
    </div>
  </div>
</section>





<section class="tickets-section">
  <h2>Get Your Tickets</h2>
  <p>Be part of Egerton’s biggest cultural experience of the year.</p>
  <a class="ticket-btn" href="tickets.html">Buy Tickets</a>
</section>



  <iframe id="footer-frame" src="footer.html" ></iframe>

</body>
</html>



// tickets.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Buy Tickets | Egerton Cultural Day</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<iframe id="nav-frame" src="nav.html"></iframe>

<main class="tickets-page">
  <h1>Egerton Cultural Day Tickets</h1>

  <div class="ticket-grid">
    <div class="ticket-card">
      <h2>Standard Pass</h2>
      <p>Access to all performances</p>
      <h3>KES 200</h3>
    </div>

    <div class="ticket-card">
      <h2>VIP Pass</h2>
      <p>Front-row seats + backstage photos</p>
      <h3>KES 500</h3>
    </div>

    <div class="ticket-card">
      <h2>Group Ticket</h2>
      <p>5 Students — discounted bundle</p>
      <h3>KES 800</h3>
    </div>
  </div>

  <h2>Payment Details</h2>
  <p>MPESA Paybill: <strong>123456</strong><br>Account: <strong>CULTURE</strong></p>

  <p>Tickets will be sent to your email after payment.</p>

</main>

<iframe id="footer-frame" src="footer.html"></iframe>

</body>
</html>


// style.css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  font-family: 'Times New Roman', Times, serif;
  background: #f5f5f5;
  color: #222;
}

iframe {
  width: 100%;
  border: none;
}

#nav-frame {
  height: 60px; 
  position: sticky;
  top: 0;  z-index: 1000;
}

#footer-frame {
  height: 140px;
}



main {
  /* min-height: calc(100vh - 220px);  */
  /* padding: 5px; */
  text-align: center;
  margin: 0 0;
}






.hero-split {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #fff;
  text-align: center;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('love.jpeg') center/cover no-repeat;
  overflow: hidden;
}

.hero-split::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  animation: fadeIn 2s ease-in-out;
}

.hero-text {
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 0 20px;
  font-size: larger;
}

.hero-text h1 {
  /* font-size: 10em; */
  font-weight: 500;
  /* font-size: 15vw; */
  margin-bottom: 0.5em;
  text-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

.hero-text h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
  font-weight: 500;
  text-shadow: 0 3px 10px rgba(0,0,0,0.4);
}

.hero-text p {
  font-size: 1.2em;
  line-height: 1.6;
  opacity: 0.9;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}






@media (max-width: 900px) {
  .hero-split {
    /* flex-direction: column; */
    padding: 40px 5%;
    /* background: #0a4c27; */
  }

  .hero-image {
    width: 100%;
    height: 60vh;
    order: -1;
    border-radius: 0;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  .hero-text {
    text-align: center;
    padding: 20px 0;
  }

  .hero-text h1 {
    font-size: 2em;
  }

  .hero-text p {
    font-size: 1em;
  }
}




.content {
  padding: 3rem 1rem;
}

.about-section {
  margin-top: 2rem;
}

.about-list {
  list-style: none;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0;
}

.about-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  transition: transform .3s ease, box-shadow .3s ease;
  text-align: center;
  padding-bottom: 1rem;
}

.about-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.about-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.about-card p {
  padding: 1rem;
  font-size: 1rem;
  color: #444;
}









.slider-wrapper{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:360px;
    width:100%;
    padding:25px;
    background:#f0f7f0;
    position:relative;
}
.text-side{
    flex:1;
    max-width:42%;
}
.text-side h2{
    margin:0;
    color:#013301;
}
.text-side p{
    color:#013301;
    line-height:1.5;
}

.about-link{
    display:inline-block;
    padding:8px 12px;
    background:#046d2a;
    color:white;
    border-radius:6px;
    font-size:13px;
    font-weight:600;
    text-decoration:none;
    transition:.4s;
}
.about-link:hover{background:#03521d;}

.nav-buttons label{
    font-size:32px;
    cursor:pointer;
    padding:12px;
}

input[type="radio"]{display:none;}

.image-side{
    flex:1;
    max-width:55%;
    height:100%;
    position:relative;
    overflow:hidden;
    border-radius:12px;
}

.slides img{
    position:absolute;
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0;
    transition:.5s;
}

#as1:checked~.image-side .a1{opacity:1;}
#as2:checked~.image-side .a2{opacity:1;}
#as3:checked~.image-side .a3{opacity:1;}











.detail-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: #f0f0f0;
  gap: 40px; 
  flex-wrap: wrap; 
}

.detail-hero img {
  max-width: 500px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  order: 2;
}

.detail-text {
  flex: 1;
  min-width: 280px;
  order: 1; 
  text-align: left;
}

.detail-text h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #222;
}

.detail-text p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .detail-hero {
    flex-direction: column;
    text-align: center;
  }

  .detail-text {
    order: 1;
  }

  .detail-hero img {
    order: 2;
    max-width: 90%;
    margin-bottom: 20px;
  }
}
















.event-calendar {
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.calendar-table {
  margin: 20px 0;
  width: 90%;
  border-collapse: collapse;
  font-size: 1.1rem;
}
.calendar-table th, .calendar-table td {
  border: 1px solid #999;
  padding: 12px;
}
.calendar-table th {
  background: #0a4c27;
  color: white;
}

.acknowledgements,
.testimonials {
  padding: 3rem 1.5rem;
  margin: 0 auto;
  max-width: 1200px;
}

.acknowledgements {
  background: linear-gradient(135deg, #f0f9f1, #e8f5e9);
  border-bottom: 1px solid #d1e7dd;
}

.acknowledgements h2 {
  text-align: center;
  font-size: 2.25rem;
  color: #1b5e20;
  margin-bottom: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.leaders {
  display: grid;
  gap: 1.75rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.leader-card {
  background: white;
  padding: 1.75rem;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #4caf50;
}

.leader-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.leader-card h3 {
  font-size: 1.35rem;
  color: #2e7d32;
  margin-bottom: 0.25rem;
}

.leader-card p {
  color: #555;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.leader-card blockquote {
  font-style: italic;
  color: #333;
  margin: 0;
  padding-left: 1rem;
  border-left: 3px solid #81c784;
  font-size: 1.05rem;
  line-height: 1.6;
}

.testimonials {
  background-color: #ffffff;
  border-top: 1px solid #eee;
}

.testimonials h2 {
  text-align: center;
  font-size: 2.25rem;
  color: #388e3c;
  margin-bottom: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.testimonial-list {
  display: grid;
  gap: 1.75rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.testimonial {
  background: #f9fff9;
  padding: 1.75rem;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  font-style: italic;
  color: #263238;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.testimonial p {
  margin: 0 0 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #37474f;
}

.testimonial h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #388e3c;
  margin: 0;
  text-align: right;
}

.testimonial::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 3rem;
  color: #e8f5e9;
  font-family: Georgia, serif;
  line-height: 1;
}
.tickets-section {
  text-align: center;
  padding: 3rem 1rem;
  background: #0a4c27;
  color: white;
}
.ticket-btn {
  display: inline-block;
  padding: 10px 25px;
  background: white;
  color: #0a4c27;
  font-weight: bold;
  border-radius: 5px;
}

.tickets-page {
  text-align: center;
  padding: 2rem 1rem;
}
.ticket-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.ticket-card {
  background: #e8f5e9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}
