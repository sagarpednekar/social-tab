import './App.css';

function App() {
  const urls = [
    {
      url: "https://www.youtube.com/",
      title: "YouTube"
    },
    {
      url: "https://www.linkedin.com",
      title: "Linkedin"
    }
  ];
  return (
    <div>
      {urls.map((social, index) => {
        return (
          <button key={index} onClick={() => window.open(social.url, "_blank")}>
            {social.title}
          </button>
        );
      })}
    </div>
  );
}

export default App;
