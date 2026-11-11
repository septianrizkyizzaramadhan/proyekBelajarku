function getUserPosts() {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        title: "Belajar Backend"
      },
      {
        id: 2,
        title: "Belajar Node.js"
      }
    ]);
  });
}