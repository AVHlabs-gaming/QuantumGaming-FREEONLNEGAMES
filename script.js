body {
    background: url('https://i.postimg.cc/C5FSrT3s/rauYQCo.png') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}
.sidebar {
    width: 220px;
    background: rgba(0, 0, 0, 0.85);
    padding: 20px;
    position: fixed;
    height: 100%;
    overflow: auto;
    border-radius: 10px 0 0 10px;
    box-shadow: 3px 0 10px rgba(0, 0, 0, 0.5);
}
.sidebar h1 {
    color: yellow;
    text-align: center;
    font-size: 22px;
}
.sidebar ul {
    list-style-type: none;
    padding: 0;
}
.sidebar ul li {
    padding: 10px;
    text-align: left;
    border-radius: 5px;
    transition: background 0.3s;
}
.sidebar ul li:hover {
    background: rgba(255, 255, 255, 0.1);
}
.sidebar ul li a {
    color: #D2B48C;
    text-decoration: none;
    display: block;
    font-weight: bold;
    cursor: pointer;
}
.content {
    margin-left: 250px;
    padding: 40px;
    color: white;
}
h1 {
    color: #D2B48C;
    margin-bottom: 20px;
}
.game-image {
    width: 150px;
    display: block;
    margin-top: 10px;
}
.section {
    display: none;
}
.active-section {
    display: block;
}
