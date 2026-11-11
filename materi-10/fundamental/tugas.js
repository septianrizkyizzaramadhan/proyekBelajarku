
function getUser() {
  // TODO: Return Promise

  return new Promise((resolve) => {
    resolve({
        id: 1,
        name: 'revy'
    })
  })
}

function getUserPosts() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 2,
                    name: 'riko'
                },
                {
                    id: 3,
                    name: 'rido'
                }
            ])
        }, 1000);
    })
  // TODO: Return Promise
}

async function main() {
  console.log('mengambil data...')
    try {
        const user = await getUser() 
        const post = await getUserPosts()
        console.log(user)
        console.log(post)

    // TODO: Ambil data user
    // TODO: Ambil data posts
    // TODO: Tampilkan hasil
  } catch (error) {
    console.error(error.message)
    // TODO: Handle error
  }
}

main();
