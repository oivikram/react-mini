import Card from "./component/Card";

const App = () => {
  const jobs = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    salary: "$100/hr",
    location: "Bangalore, India",
    saved: true
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    posted: "1 week ago",
    role: "Software Engineer",
    salary: "$110/hr",
    location: "Hyderabad, India",
    saved: false
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Infosys_logo.svg",
    company: "Infosys",
    posted: "3 days ago",
    role: "UI Developer",
    salary: "$80/hr",
    location: "Pune, India",
    saved: false
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flipkart_logo.svg",
    company: "Flipkart",
    posted: "4 days ago",
    role: "Product Designer",
    salary: "$95/hr",
    location: "Bangalore, India",
    saved: true
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/IBM_logo.svg",
    company: "IBM",
    posted: "6 days ago",
    role: "UX Researcher",
    salary: "$105/hr",
    location: "Chennai, India",
    saved: false
  },
  {
    id: 7,
    img: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false
  },
  {
    id: 8,
    img: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false
  },
  {
    id: 9,
    img: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false
  },
  {
    id: 10,
    img: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false
  }
];
  return (
    <div className="main">
      {jobs.map((elem) => (
        <Card
          key={elem.id}
          company={elem.company}
          salary={elem.salary}
          img={elem.img}
          location={elem.location}
          title={elem.role}
          post={elem.posted}
        />
      ))}
    </div>
  )
}

export default App
