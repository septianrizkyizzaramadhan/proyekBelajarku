function getUser() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve({
        id: 1,
        name: "revy"
      });
    } else {
      reject(new Error("Failed to fetch user"));
    }
  });
}


async function main() {
  try {
    const user = await getUser()

    console.log(user)
  } catch (err) {
    console.log(err.message)
  }
}

main()
// belum selesai 
