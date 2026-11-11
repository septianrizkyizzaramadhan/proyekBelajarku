
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "revy"
      });
    }, 2000);
  });
}

function getUserPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 2, name: "riko" },
        { id: 3, name: "rido" }
      ]);
    }, 3000);
  });
}

async function main() {
  console.log("Mengambil data...");

  try {
    const [user, posts] = await Promise.all([
      getUser(),
      getUserPosts()
    ]);

    console.log("User:", user);
    console.log("Posts:", posts);

  } catch (error) {
    console.error(error);
  }
}

main();
