const getAll = () => {
    const blogs = [
      {
        _id: "5a68a2fe66b3369ab8d7798f",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a68a5656a34d29c71cecf11",
        title: "Continuous integration sertification",
        author: "Martin Fowler",
        url: "https://martinfowler.com/bliki/ContinuousIntegrationCertification.html",
        likes: 1,
        user: {
          _id: "5a68a2ff66b3369ab8d77992",
          username: "hellas",
          name: "Arto Hellas"
        },
        __v: 0
      },
    ]
    return Promise.resolve(blogs)
  }
  
  const setToken = (newToken) => {
  }
  
  export default { getAll, setToken }