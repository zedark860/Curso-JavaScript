function getUser() {
  console.log("Recuperando informações do usuário");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 0,
        name: "Davi",
        surname: "Nascimento",
      });
    }, 2000);
  });
}

function getFriendList(user) {
  console.log(
    `Recuperando lista de amigos do usuário ${user.name} ${user.surname}`
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["joão", "bruna", "felipe", "lira"]);
    }, 2000);
  });
}

function getPhotos(username) {
  console.log(`Recuperando lista fotos do usuário ${username}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["egito", "bahamas", "maldivas", "suécia"]);
    }, 2000);
  });
}

async function displayPhotos() {
  try {
    const user = await getUser();
    const friends = await getFriendList(user);
    const photos = await getPhotos(friends[3]);
    console.log(photos);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Terminando conexão com o instagram");
  }
}

displayPhotos();
