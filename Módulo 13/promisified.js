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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(["egito", "bahamas", "maldivas", "suécia"]);
    }, 2000);
  });
}

getUser()
  .then((user) => {
    return getFriendList(user);
  })
  .then((friends) => {
    return getPhotos(friends[3]);
  })
  .then((photos) => {
    console.log(photos);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Esse é o fim da comunicação com com o instagram");
  })
